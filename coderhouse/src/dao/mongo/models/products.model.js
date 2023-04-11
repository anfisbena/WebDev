import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        code: String,
        price: Number,
        status: Boolean,
        stock: Number,
        category: String,
        thumbnails: Array
    }
);

const Product = mongoose.model('products', ProductSchema);

export default Product;