import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const dataBase = mongoose.connect("mongodb+srv://IndependentStudy:CIS4905@cluster0.tovs3lh.mongodb.net/?retryWrites=true&w=majority");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});

app.get('/menu', (req: Request, res: Response) => {
  const menu = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Pasta', price: 8 },
  ];

  res.json(menu);
});

app.listen(5000);

