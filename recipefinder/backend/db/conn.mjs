import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";   //mongoDB connection 

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();      //connects to the mongoDB database
} catch (e) {
  console.error(e);
}

let db = conn.db("recipe_finder_db"); //after connecting the database is accessed 

export default db; 
