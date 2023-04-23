import {Schema,model,SchemaTypes} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const cartSchema = new Schema({
    product_id: {
        type: SchemaTypes.ObjectId,
        ref: 'products', // referencia a otro modelo de Mongoose
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        required: true
    }
});

const UserSchema = new Schema(
    {
        first_name:
        {
            type:String,
            required:true
        },
        last_name:
        {
            type:String,
            required:true
        },
        email: 
        {
            type: String,
            unique: true,
            index:true
        },
        role:
        {
            type:String,
            enum:['admin','user'],
            default:'user'
        },
        cart:[cartSchema]
    }
);

UserSchema.plugin(mongoosePaginate);
const User = model('users', UserSchema);
export default User;