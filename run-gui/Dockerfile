
FROM d3x0r/alpine-gui as d3x0r-node-alpine
WORKDIR /app
COPY --from=d3x0r/node-alpine-extra /app/node_modules /app/node_modules
COPY --from=d3x0r/node-alpine-gui-build-pack /app/sack.vfs /app/node_modules/sack.vfs
WORKDIR /app/node_modules/sack.vfs

# minimize output
RUN rm -rf build/sack-src build/sack-Release build/InterShell-Release src tests test tutorial build/CMakeFiles *.md .git

RUN apk add nodejs
RUN apk add unixodbc psqlodbc 
#mariadb-connector-odbc

WORKDIR /app

ENV XDG_RUNTIME_DIR=/tmp/run
CMD /usr/bin/weston --backend=rdp-backend.so --rdp-tls-key=/tmp/rdp-key/tls.key --rdp-tls-cert=/tmp/rdp-key/tls.crt
