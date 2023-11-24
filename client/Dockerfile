FROM node:latest

WORKDIR /react-app

COPY . .

RUN npm i && npm run build 
RUN npm i -g serve

CMD ["serve","-s", "build"]