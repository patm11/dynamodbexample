FROM node:14-alpine3.13

COPY build/ build/
COPY node_modules/ node_modules/

WORKDIR ./

ENTRYPOINT "node build/Release/src/index.js"