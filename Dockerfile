FROM node:22-alpine AS builder
WORKDIR /app

# Install Chromium for Puppeteer
RUN apk add --no-cache chromium nss freetype harfbuzz ca-certificates ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY package*.json ./
RUN npm install
RUN npm install puppeteer@22

COPY . .
RUN npm run build
RUN node prerender.mjs

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
