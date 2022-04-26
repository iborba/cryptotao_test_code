FROM node:14-alpine3.14 as builder

ENV NODE_VERSION 14.18.0

ADD ./ /src
WORKDIR /src
RUN npm install --production
RUN mv node_modules prod_node_modules
RUN npm install
RUN npm run build

FROM node:14-alpine3.14
COPY --from=builder /src/build/src /app
COPY --from=builder /src/prod_node_modules /app/node_modules
COPY --from=builder /src/package.json /app
WORKDIR /app
USER node
CMD ["npm", "run", "start"]