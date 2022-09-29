
from d3x0r/alpine-build-tools as buildtools
label buildTools="Do Build"

WORKDIR /app
COPY . .
RUN git clone https://github.com/d3x0r/sack.vfs --depth=1 

WORKDIR /app/sack.vfs
RUN cmake-js configure
RUN cmake-js build
# moved this later...
# RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git

CMD ["/bin/sh"]
