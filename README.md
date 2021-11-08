
# D3x0r's Dockers

(Right? De-cker: Do-cker)

This is some docker build scripts to build a set of minimal node-js containers with sack.vfs installed.

## base 

This is just the linux and busybox core.



## build

This is a layer containing the build environment and tools which build the native part of this.



## run

this is the base and node, and some of the products from the build.

[d3x0r/alpine](https://hub.docker.com/r/d3x0r/node-alpine-run)


## extra

This layer is just JS libraries which have some inter-relation with sack.



- [jsox](https://github.com/d3x0r/jsox)
- [RNG](https://github.com/d3x0r/salty-random-generator)
- user-database (login)
- [HTML Popup/window forms](https://github.com/d3x0r/popups)


## app1

- an example to use the previous layers to get a resulting application layer.


##

