import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = mongoose.Types.ObjectId;

const MenuSchema = new Schema({
    name: String,
    description: String,
    price: Number
}); 

const MenuModel = mongoose.model('MenuItem', MenuSchema);

export default MenuModel;