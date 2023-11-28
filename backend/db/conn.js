const { MongoClient } = require('mongodb');
const uri =
	'mongodb+srv://biogreen360:3651@biogreen360.9cjky.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
var cloudDb;

async function connectToDb() {
	try {
		await client.connect();
		cloudDb = client;
		return client;
	} catch (err) {
		console.error(err);
	}
}

connectToDb();

function getCloudDb() {
	return cloudDb;
}
module.exports = {
	connectToDb,
	getCloudDb,
};
