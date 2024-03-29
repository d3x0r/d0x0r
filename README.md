
# D3x0r's Dockers

(Right? De-cker: Do-cker)

This is some docker build scripts to build a set of minimal node-js containers with sack.vfs installed.

## base 

This is just the linux and busybox core.

## build (d3x0r/alpine-build-tools)

This is a layer containing the build environment and tools which build the native part of this.
This has npm, cmake-js no python.

Includes:
- base

Adds:
- g++ unixodbc-dev util-linux-dev(uuid) cmake



## build (d3x0r/alpine-build)



Builds sack.vfs non-gui.

Includes 
- d3x0r/alpine-build-tools


## extra (d3x0r/alpine-extra)

This layer is just JS libraries which have some inter-relation with sack.


Includes:
- build

Adds:
- [jsox](https://github.com/d3x0r/jsox)
- [RNG](https://github.com/d3x0r/salty-random-generator)
- user-database (login)
- [HTML Popup/window forms](https://github.com/d3x0r/popups)


## run (d3x0r-alpine-run)

this is the base and node, and some of the products from the build.

[d3x0r/alpine](https://hub.docker.com/r/d3x0r/node-alpine-run)

Includes:
- base
- build binary output
- JS addons from extra

Adds:
- None; just a merge point between JS updates and C updates which are less frequent.
- sets WORKDIR /app

## app1

A simple application that has a basic load test and package.json.  Your own application layer should look something like this; the most important part is to provide
you own package.json in /app

Includes:
- Run

Adds:
- Beyond the scope of this documenation....



## Sample

Something like the below works as a minimal example against [Run](#run)

hello.mjs

``` js
import {sack} from "sack.vfs";
import {JSOX} from "jsox";
import {SaltyRNG} from "@d3x0r/srg";

console.log( JSOX.stringify( sack, null, "\t" ) );
console.table( JSOX );
console.table( SaltyRNG );

const JSON=JSOX;


```

Dockerfile

``` docker
FROM d3x0r/node-alpine-run
copy . .
CMD ["node", "hello.mjs"]
```


# Gui Stack

- base[d3x0r/alpine]
- gui[d3x0r/node-alpine-gui] - (weston, rdp, some icon and font resources)
- gui-build-tools[d3x0r/node-alpine-gui-build-tools] - adds compilers, libraries and headers required to build.
- gui-build[d3x0r/node-alpine-gui-build] - builds sack-gui branch of sack.vfs
- gui-build-update[d3x0r/node-alpine-gui-build-update] - pulls latest changes from github; much shorter process than the above source build.
- gui-build-pack[d3x0r/node-alpine-gui-pack] - remove build temporary products.
                                       