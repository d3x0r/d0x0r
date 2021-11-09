
from d3x0r/alpine as buildtools
label buildTools="Root Build System"
RUN apk add python3 make g++ cmake
RUN apk add git
RUN apk add unixodbc-dev 
RUN apk add util-linux-dev
RUN apk add nodejs npm

RUN apk add ncurses-dev ncurses slang linux-headers

RUN npm install -g cmake-js
WORKDIR /app
COPY . .
RUN git clone https://github.com/d3x0r/sack.vfs --depth=1 

WORKDIR /app/sack.vfs
RUN cmake-js configure
RUN cmake-js build
# moved this later...
# RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git

CMD ["/bin/sh"]
