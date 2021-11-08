const sack = require( "sack.vfs" );

const db = sack.Sqlite("pgsql" );

const disk = sack.Volume();

console.log( "Abstract?", db.do( "show tables" ) );
console.log( "Simple?", db.do( "select 1+1" ) );
try {
const sql = `
CREATE OR REPLACE FUNCTION show_create_table(table_name text, join_char text = E'\n' ) 
  RETURNS text AS 
$BODY$
SELECT 'CREATE TABLE ' || $1 || ' (' || $2 || '' || 
    string_agg(column_list.column_expr, ', ' || $2 || '') || 
    '' || $2 || ');'
FROM (
  SELECT '    ' || column_name || ' ' || data_type || 
       coalesce('(' || character_maximum_length || ')', '') || 
       case when is_nullable = 'YES' then '' else ' NOT NULL' end as column_expr
  FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = $1
  ORDER BY ordinal_position) column_list;
$BODY$
  LANGUAGE SQL STABLE;
`;
console.log( "sql_stuff", db.do( sql ) );
console.log( "sql_stuff2", db.do( "select show_create_table('table1' ) );

console.log( "Abstract?", db.makeTable( "create table table1( user int primary key, name char )" ) );
}catch(err) {
	console.log( "blah:", err );
}

