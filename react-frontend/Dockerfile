FROM node:alpine

WORKDIR /react-frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]
