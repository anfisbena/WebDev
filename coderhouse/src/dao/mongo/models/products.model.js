import {Schema,model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

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

ProductSchema.plugin(mongoosePaginate)
const Product = model('products', ProductSchema);

export default Product;