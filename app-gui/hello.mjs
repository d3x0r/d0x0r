import {sack} from "sack.vfs";
import {JSOX} from "jsox";
import {SaltyRNG} from "@d3x0r/srg";

console.log( JSOX.stringify( sack, null, "\t" ) );
console.table( JSOX );
console.table( SaltyRNG );

const JSON=JSOX;

