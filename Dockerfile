FROM node:12

# Create working directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY /src .