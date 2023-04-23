import {Schema,model,SchemaTypes} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const CartSchema= new Schema({
  products:[
    {
      pid:{
        type:SchemaTypes.ObjectId,
        ref:"products"
      }
      ,quantity:{
        type:Number,
        default:1
      },
    },
  ],
})

CartSchema.plugin(mongoosePaginate)
const Carts = model("carts", CartSchema);

export default Carts;