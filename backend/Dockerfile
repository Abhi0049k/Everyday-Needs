FROM mhart/alpine-node AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 8998

FROM base AS development
COPY . .
CMD [ "npm", "run", "dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD [ "npm", "start" ]