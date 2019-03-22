FROM node:latest

WORKDIR /usr/src/app

COPY package.json .
RUN yarn install
COPY . ./

expose 3000
CMD ["yarn", "dev"]
