import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: "../../.env" });

const mongoDBUrl = process.env.MONGODB_URI;

mongoose.connect(mongoDBUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000
})
.then(() => {
    console.log('Connected to MongoDB successfully.');
    // Test with a simple query
    const testSchema = new mongoose.Schema({ name: String });
    const TestModel = mongoose.model('Test', testSchema);
    TestModel.find({})
        .then(results => {
            console.log('Test query results:', results);
        })
        .catch(err => {
            console.error('Error performing test query:', err);
        });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    console.error('Error stack trace:', err.stack);
});
