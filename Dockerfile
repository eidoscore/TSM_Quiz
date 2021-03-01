FROM node:14
WORKDIR /usr/app
ENV NODE_ENV=production
COPY . .
RUN npm install
RUN npm install dotenv
EXPOSE 3000
CMD ["npm","start"]
