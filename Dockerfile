FROM node:slim


# Create app direcotiy

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Installing dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn

# Copy source files
COPY . /usr/src/app

# Building app
RUN yarn build

EXPOSE 3000

#Running the app

CMD "yarn" "dev"
