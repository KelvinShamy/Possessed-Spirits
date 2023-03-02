const path = require('path');
const { Pool, /* Client */ } = require('pg'); 
const { DB_PASSWORD } = require(path.resolve(__dirname, '../../secrets.js')); 


const PG_URI = `postgres://pvalafej:${DB_PASSWORD}@berry.db.elephantsql.com/pvalafej`;


const pool = new Pool({
    connectionString: PG_URI,
});


/* NEW CHANGES: CONTINUED -> CREATe CONNECTION WITH DATABASE TO MIGRATE FROM DATA TO SQL DB-
- ONLY NEEDED TO BE RUN ONCE TO POPLULATE SQL DATABASE (WILL CREATE DUPLICATES IF RUN MORE THAN ONCE!)
 */
/* Used this to import from cocktails.js */
/* const client = new Client({
    host: 'berry.db.elephantsql.com',
    user: 'pvalafej',
    password: 'OQWLyL6isnOEO10-9Q4wCEPhHeMYF6-K',
    database: 'pvalafej',
    port: 5432,
});
client.connect();
const insertCocktail = async (obj) => {
    try {
        await client.query(
            `INSERT INTO "cocktails" (name, liquor, ingredients, garnish, directions)
            VALUES ($1, $2, $3, $4, $5)`, [obj.name, JSON.stringify(obj.liquor), JSON.stringify(obj.ingredients), obj.garnish, JSON.stringify(obj.directions)]
        );
        return true;
    } catch (error) {
    console.error(error.stack);
    return false;
    } finally {
    // await client.end(); // closes connection - NO NEED TO USE IT 
    }
} */


module.exports = {
    /* USED TO IMPORT insertCoctail FROM cocktails.js TO POPULATE SQL DB */
    /* insertCocktail, */

    query: (text, params, callback) => {
        // console.log('checking the pool')
        // console.log(text, params)
    
        // return result of executing sql command
        return pool.query(text, params, callback);
    },
  };
