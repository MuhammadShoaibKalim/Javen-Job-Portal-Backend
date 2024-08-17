// index.js
import express from 'express';
import 'dotenv/config';
import indexRouter from './routes/jobroute.js';


const app = express();
const PORT = process.env.port || 3000;
 



// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
 
app.use('/', indexRouter);
 
app.get("/ShaibiCode", (req, res) => {
  res.send("Hi there in ShaibiCode and Solution");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});