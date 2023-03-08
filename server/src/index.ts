import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();
const dataBase = mongoose.connect("mongodb+srv://IndependentStudy:CIS4905@cluster0.tovs3lh.mongodb.net/?retryWrites=true&w=majority");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});


app.listen(5000);

