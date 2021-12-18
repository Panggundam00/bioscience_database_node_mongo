# FROM node:alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY ./package.json /usr/src/app/

# RUN npm i

# COPY . /usr/src/app

# EXPOSE 5000

# CMD ["node", "server.js"]

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]