
from d3x0r/alpine-gui as platform
label buildTools="Root Build(GUI) System"

RUN apk add python3 make gcc g++ cmake ninja gdb

RUN apk add git
RUN apk add nodejs npm

RUN apk add linux-headers
RUN apk add unixodbc-dev 
RUN apk add util-linux-dev
RUN apk add wayland-protocols wayland-dev libxkbcommon-dev glew-dev
RUN apk add libressl libressl-dev 


#RUN apk add libssh2
#RUN apk add libssh2-dev

RUN git clone --depth=1 https://github.com/libssh2/libssh2.git
RUN mkdir libssh2/build
WORKDIR /libssh2/build
RUN cmake .. -DCMAKE_INSTALL_PREFIX=/
RUN cmake --build . --target install
WORKDIR /
RUN rm -fr libssh2



RUN apk add freetype-dev libpng-dev jpeg-dev zlib-dev

RUN apk add ncurses-dev ncurses slang

