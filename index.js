const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/your_db_name"; // update your_db_name

const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Reference to your database and collection
    const database = client.db("your_db_name");
    const collection = database.collection("your_colllection_name");

    // Find all documents in the collection
    const documents = await collection.find({}).toArray();

    if (documents.length > 0) {
      console.log('Available data:');
      documents.forEach(document => {
        console.log(document);
      });
    } else {
      console.log('No data available in the collection.');
    }

  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  } finally {
    // Close the connection when done
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the function to connect and retrieve data
connectToMongo();
