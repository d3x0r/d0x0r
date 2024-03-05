#!/bin/sh

if [ -z "$XDG_RUNTIME_DIR" ]; then
	XDG_RUNTIME_DIR="/tmp/$(id -u)-runtime-dir"

	mkdir -pm 0700 "$XDG_RUNTIME_DIR"
	export XDG_RUNTIME_DIR=$XDG_RUNTIME_DIR
fi

env | grep XDG_RUNTIME | tee ~/.ssh/environment
/usr/sbin/sshd
/bin/sh
