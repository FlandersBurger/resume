FROM node:24-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY tsconfig.json vite.config.ts vite.fa-subset.ts ./
COPY src/ ./src/
# Inputs for the Font Awesome subsetting done during client:build
COPY resources/font-awesome/ ./resources/font-awesome/
COPY data/hobbies.json ./data/hobbies.json
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
