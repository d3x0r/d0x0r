
from d3x0r/alpine-gui-build-tools as platform
label buildTools="Root Build(GUI) System"


WORKDIR /app
COPY . .
RUN git clone https://github.com/d3x0r/sack.vfs --depth=1

WORKDIR /app/sack.vfs
RUN export cmake_js_extra_flags='--CDNEED_LIBRESSL=0 --CDNEED_FREETYPE=0 --CDNEED_JPEG=0 --CDNEED_ZLIB=0'
RUN npm install .  --ignore-scripts
RUN npm run build-gui

## minimize output
#RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git build/src

#CMD /usr/bin/weston --backend=rdp-backend.so --rdp-tls-key=/tmp/rdp-key/tls.key --rdp-tls-cert=/tmp/rdp-key/tls.crt
