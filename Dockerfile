# Build and serve Docusaurus
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
