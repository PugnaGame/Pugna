FROM node

EXPOSE 3000

RUN npm install supervisor -g

WORKDIR /nodeapp

CMD ["supervisor", "server/server.js"]
