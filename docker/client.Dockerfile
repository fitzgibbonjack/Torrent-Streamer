FROM node:18-alpine

WORKDIR /client

# Install dependencies
RUN apk add --no-cache python3 py3-pip make g++
COPY client/.npmrc .
COPY client/package.json .
COPY client/package-lock.json .
RUN npm install
RUN npm install -g gatsby-cli

# Copy src and start development server
COPY client .
