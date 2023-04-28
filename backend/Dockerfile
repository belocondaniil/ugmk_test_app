FROM node:16

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["node", "app.js"]
