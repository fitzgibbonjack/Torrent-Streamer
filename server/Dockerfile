FROM node:18-slim
WORKDIR /app
# Install dependencies
COPY package.json .
RUN npm install --quiet
# Make Prisma available on the command line
RUN npm install -g prisma@4.2.1
# Updates to container to support M1 chips
RUN apt-get update
RUN apt-get install -y openssl
# Copy app files
COPY . .
