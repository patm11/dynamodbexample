FROM node:14-alpine3.13
USER "node"
COPY ./ /app
WORKDIR "/app"
ENTRYPOINT npm run-script start:express