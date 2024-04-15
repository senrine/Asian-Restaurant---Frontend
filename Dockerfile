FROM node:20.11.0-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npx", "vite", "--host"]
