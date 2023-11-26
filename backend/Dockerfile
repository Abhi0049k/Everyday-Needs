FROM node:alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8998

CMD [ "npm", "run", "dev"]
