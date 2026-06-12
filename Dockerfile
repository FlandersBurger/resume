FROM node:24-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY tsconfig.json vite.config.ts ./
COPY src/ ./src/
RUN npm run rebuild && npm run client:build

FROM node:24-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --ignore-scripts
COPY --from=builder /app/dist ./dist
COPY data/ ./data/
COPY images/ ./images/
COPY sounds/ ./sounds/
COPY resources/ ./resources/
EXPOSE 3000
CMD ["node", "dist/server.js"]
