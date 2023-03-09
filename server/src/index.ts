import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Menu from "./models/menu"

const PORT = 5000;
const app = express();

app.use(express.json());

app.post('/menu', async (req: Request, res: Response) => {
    console.log(req.body);
    const newMenu = new Menu({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    const createdMenu = await newMenu.save();
    res.json(createdMenu);
});

mongoose.connect(
    "mongodb+srv://IndependentStudy:CIS4905@cluster0.tovs3lh.mongodb.net/?retryWrites=true&w=majority"
).then(() => {

console.log('listening on port ${PORT}');
 app.listen(PORT);   
})



