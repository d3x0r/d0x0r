
from d3x0r/alpine as weston_gui
label buildTools="GUI Subsystem"

RUN apk add openssl 
RUN apk add freerdp wayland weston weston-backend-rdp weston-shell-desktop weston-terminal glew
RUN apk add paper-icon-theme
RUN apk add mate-themes
RUN apk add adwaita-icon-theme

run mkdir /tmp/run
run chmod 700 /tmp/run
run mkdir /tmp/rdp-key
WORKDIR /tmp/rdp-key
#run winpr-makecert -rdp -silent -n rdp-security
run openssl genrsa -out tls.key 2048
run echo $'US\nUS\n.org\n\n\n\n\n\n\n' >ans.txt
run openssl req -new -key tls.key -out tls.csr <ans.txt
run openssl x509 -req -days 36500 -signkey tls.key -in tls.csr -out tls.crt

run mkdir $HOME/.config

run echo $'[shell]\ncursor-theme=Paper' >$HOME/.config/weston.ini
run echo $'[launcher]\nicon=/usr/share/icons/Paper/32x32/apps/terminal.png\npath=/usr/bin/weston-terminal --shell=/bin/sh\n' >> $HOME/.config/weston.ini

EXPOSE 3389/tcp

#run systemc

#
#RUN npm install -g cmake-js
#WORKDIR /app
#COPY . .
#RUN git clone https://github.com/d3x0r/sack.vfs --depth=1 
#
#WORKDIR /app/sack.vfs
#RUN cmake-js configure
#RUN cmake-js build
## moved this later...
## RUN rm -rf src tests test tutorial build/CMakeFiles *.md .git
#
ENV XDG_RUNTIME_DIR=/tmp/run
#ENV WAYLAND_DEBUG=server
#run apk add strace
#strace -f -o /tmp/trace.log 
CMD /usr/bin/weston --backend=rdp-backend.so --rdp-tls-key=/tmp/rdp-key/tls.key --rdp-tls-cert=/tmp/rdp-key/tls.crt 
#CMD ["/bin/sh"]
