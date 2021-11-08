const sack = require( "sack.vfs" );
console.log( "Score?", sack );

const db = sack.Sqlite("pgsql" );
const disk = sack.Volume();

console.log( "Db?", db );
console.log( "/usr/lib/odbc:", disk.dir( "/usr/lib/odbc" ) );

console.log( "/usr/lib:", disk.dir( "/usr/lib" ) );