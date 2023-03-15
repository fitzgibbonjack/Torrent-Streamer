FROM node:18-alpine
WORKDIR /app

# Install dependencies
RUN apk add --no-cache python3 py3-pip make g++
COPY .npmrc .
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g gatsby-cli

# Copy src and start development server
COPY . .
