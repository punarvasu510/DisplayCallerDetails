conn = new Mongo("localhost:27017");
db = conn.getDB("callerdb");
collection = "caller";

db.caller.insert({"name":"Chotta Bheem", "phone":9845216901});
db.caller.insert({"name":"Chutki", "phone":9900431051});

/*
cursor = db.caller.find()
while(cursor.hasNext()){
	printjson(cursor.next());
}

*/

