FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8998

CMD [ "npm", "run", "dev"]