
FROM d3x0r/alpine as d3x0r-node-alpine
WORKDIR /app
COPY --from=d3x0r/node-alpine-extra /app/node_modules /app/node_modules
COPY --from=d3x0r/node-alpine-build /app/sack.vfs /app/node_modules/sack.vfs
WORKDIR /app/node_modules/sack.vfs
# minimize output
RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git

RUN apk add nodejs
RUN apk add unixodbc psqlodbc

WORKDIR /app
