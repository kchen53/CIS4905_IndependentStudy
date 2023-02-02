import express, { Request, Response } from "express";
import mongoose from 'mongoose';

const app = express();
const dataBase = mongoose.connect("mongodb+srv://IndependentStudy:CIS4905@cluster0.tovs3lh.mongodb.net/?retryWrites=true&w=majority");

app.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});

app.listen(5000);

