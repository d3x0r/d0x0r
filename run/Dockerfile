
FROM d3x0r/alpine as d3x0r-node-alpine
WORKDIR /app
COPY --from=d3x0r/node-alpine-extra /app/node_modules /app/node_modules
COPY --from=d3x0r/node-alpine-build /app/sack.vfs /app/node_modules/sack.vfs

RUN apk add nodejs
RUN apk add unixodbc psqlodbc

WORKDIR /app
