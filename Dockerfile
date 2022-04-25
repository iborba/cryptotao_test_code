FROM node:14.15.5-alpine3.10 as dev

ADD ./ /src
WORKDIR /src
RUN npm install --production
RUN mv node_modules prod_node_modules
RUN npm install
RUN npm run build

FROM node:14.15.5-alpine3.10
COPY --from=builder /src/build/src /app
COPY --from=builder /src/prod_node_modules /app/node_modules
COPY --from=builder /src/package.json /app
WORKDIR /app
USER node
CMD ["npm", "run", "start"]