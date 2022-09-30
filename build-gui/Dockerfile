
from d3x0r/node-alpine-gui as platform
label buildTools="Root Build(GUI) System"

RUN apk add python3 make g++ cmake ninja

RUN apk add git

RUN apk add unixodbc-dev 
RUN apk add util-linux-dev
RUN apk add nodejs npm
RUN apk add wayland-protocols wayland-dev libxkbcommon-dev glew-dev

RUN apk add ncurses-dev ncurses slang linux-headers

RUN npm install -g cmake-js
WORKDIR /app
COPY . .
RUN git clone https://github.com/d3x0r/sack.vfs -b sack-gui --depth=1

WORKDIR /app/sack.vfs
RUN npm run build-gui
#RUN cmake-js configure
#RUN cmake-js build

# minimize output
RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git build/src

WORKDIR /tmp/rdp-key

ENV XDG_RUNTIME_DIR=/tmp/run
CMD /usr/bin/weston --backend=rdp-backend.so --rdp-tls-key=/tmp/rdp-key/tls.key --rdp-tls-cert=/tmp/rdp-key/tls.crt
#CMD ["/bin/sh"]
