FROM node:15.12.0-alpine3.10
# create an directory
WORKDIR /usr/src/project
# copys files
COPY package*.json ./ 
COPY ./dist ./
COPY ./.env ./
RUN npm ci
EXPOSE 3000
CMD [ "node" ,"index.js" ]
