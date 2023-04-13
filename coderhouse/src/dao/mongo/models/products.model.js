import {Schema,model} from "mongoose";

const ProductSchema = new Schema(
    {
        title: String,
        description: String,
        code: {
            type: String,
            unique: true,
            index: true
        },
        price: Number,
        status: Boolean,
        stock: Number,
        category: String,
        thumbnails: Array
    }
);

const Product = model('products', ProductSchema);

export default Product;