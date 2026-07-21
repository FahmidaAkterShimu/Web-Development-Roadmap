const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb://simpleCurdUser:f9J2p1In3ZokaOiG@ac-m6sccpl-shard-00-00.l6rh7vs.mongodb.net:27017,ac-m6sccpl-shard-00-01.l6rh7vs.mongodb.net:27017,ac-m6sccpl-shard-00-02.l6rh7vs.mongodb.net:27017/?ssl=true&replicaSet=atlas-q21un2-shard-0&authSource=admin&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db('SimpleCrud');
        const userCollection = db.collection('users');

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        await client.db('admin').command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!")
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Simple CURD server is serving');
})

app.listen(port, () => {
    console.log(`Simple CURD server is running on port ${port}`);
})
