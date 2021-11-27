FROM node:14.17.4-alpine

ARG DOT_ENV_ARG="dev"
ENV DOT_ENV=$DOT_ENV_ARG

WORKDIR /home/app
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY tsconfig.prod.json ./
RUN yarn install
COPY . .
RUN yarn build
COPY . .
EXPOSE 3000
CMD [ "/bin/sh", "-c", "yarn start:${DOT_ENV}" ]
# CMD [ "yarn", "start:test" ]
# CMD [ "yarn", "start:prod" ]
