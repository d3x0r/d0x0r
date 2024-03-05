FROM alpine 
RUN apk add nodejs-current npm
RUN apk add weston wayland-protocols waypipe weston-terminal
RUN apk add openssh
RUN ssh-keygen -A

run mkdir /root/.ssh

#ssh doesn't get environment any other way - use this
run sed 's/\#PermitUserEnvironment no/PermitUserEnvironment yes/g' -i /etc/ssh/sshd_config
copy environment /root/.ssh/environment
# allow unix socket forwarding too; for waypipe
run sed 's/AllowTcpForwarding no/AllowTcpForwarding yes/g' -i /etc/ssh/sshd_config

EXPOSE 22
copy authorized_keys /root/.ssh/authorized_keys
run chmod 600 /root/.ssh/authorized_keys
copy rsa /root/.ssh/id_rsa
copy rsa.pub /root/.ssh/id_rsa.pub
run chmod 400 /root/.ssh/id_rsa*

run mkdir /tmp/0-runtime-dir
run chown 700 /tmp/0-runtime-dir

copy init.sh /init.sh
CMD ["/init.sh"]

