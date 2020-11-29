FROM node:latest


# Create app direcotiy

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copy source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

#Running the app

CMD "npm" "run" "build"

