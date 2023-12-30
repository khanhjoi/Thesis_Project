import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import routers
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware for express
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// routers for express
app.use('/api/v1/user', routes.userRouter);

app.get('/', (req, res) => {
  res.json("hello world");
});

app.listen(PORT, ()=>{
  console.log(`⚡️Server is running in http://localhost:${PORT}`);
});