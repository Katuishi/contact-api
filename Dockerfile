FROM node:15.12.0-alpine3.10
# create an directory
WORKDIR /usr/src/project
# copys files
COPY package*.json ./ 
COPY . .
# run commands
# RUN npm install
EXPOSE 8080
#CMD [ "node" ,"./dist/index.js" ]
