FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY tsconfig.json vite.config.ts ./
COPY src/ ./src/
RUN npm run rebuild && npm run client:build

FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
COPY data/ ./data/
COPY images/ ./images/
COPY sounds/ ./sounds/
COPY resources/ ./resources/
EXPOSE 3000
CMD ["node", "dist/server.js"]
