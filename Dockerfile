FROM node:10 as builder

ENV NODE_ENV development

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app
COPY package-lock.json /home/node/app
RUN npm install

COPY . /home/node/app

ENV NODE_ENV production

RUN npm run build && \
  npm prune --production

#######################################################
FROM node:10-alpine

ENV NODE_ENV production

COPY --from=builder /home/node/app /home/node/app

RUN chown -R node:node /home/node/app

USER node
WORKDIR /home/node/app

CMD ["npx", "nuxt", "start"]
