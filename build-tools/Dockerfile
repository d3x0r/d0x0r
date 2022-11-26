
from d3x0r/alpine as coreLinux
label buildTools="Root Build System"
RUN apk add python3 make gcc g++ cmake
RUN apk add git
RUN apk add nodejs npm

## include headers and libraries
RUN apk add linux-headers
RUN apk add unixodbc-dev 
RUN apk add util-linux-dev

# for compiling better editors...
RUN apk add ncurses-dev ncurses slang 

CMD ["/bin/sh"]
