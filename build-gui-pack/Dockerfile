
FROM d3x0r/node-alpine-gui-build as d3x0r-node-alpine

WORKDIR /app/sack.vfs

RUN rm -rf build/sack-src build/sack-Release build/InterShell-Release src tests test tutorial build/CMakeFiles *.md .git


WORKDIR /app

ENV XDG_RUNTIME_DIR=/tmp/run
CMD /usr/bin/weston --backend=rdp-backend.so --rdp-tls-key=/tmp/rdp-key/tls.key --rdp-tls-cert=/tmp/rdp-key/tls.crt

