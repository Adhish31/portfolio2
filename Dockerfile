# Build stage
FROM ubuntu:24.04 AS builder

ARG NODE_VERSION=20
RUN apt-get update && apt-get install -y curl ca-certificates git build-essential python3 && \
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM ubuntu:24.04 AS runtime
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/dist /var/www/html
RUN rm -f /etc/nginx/sites-enabled/default
RUN printf 'server {\n  listen 80;\n  root /var/www/html;\n  index index.html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/sites-available/default && \
    ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
