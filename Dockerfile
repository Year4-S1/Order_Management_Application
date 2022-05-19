# Docker image load version [ alpine - small build]
FROM node:16-alpine

RUN npm i -g express mongoose dotenv cors body-parser pino dayjs pino-pretty

WORKDIR /Order_Management_Application

# copy the apps in my machine to the working directory /app
COPY . .

RUN npm install

EXPOSE 8081
ENTRYPOINT [ "npm", "run" ]
CMD ["start" ]