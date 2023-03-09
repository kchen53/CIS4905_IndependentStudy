import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Menu from "./models/menu"

const PORT = 5000;
const app = express();

app.use(express.json());

app.post('/menu', async (req: Request, res: Response) => {
    const newMenu = new Menu({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    const createdMenu = await newMenu.save();
    res.json(createdMenu);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {

console.log('listening on port ${PORT}');
 app.listen(PORT);   
});



