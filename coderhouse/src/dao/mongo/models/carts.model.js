import {Schema,model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const CartSchema= new Schema({
  products:[{
    pid:{
      type:Schema.Types.ObjectId,
      ref:"products"
    }
    ,quantity:{
      type:Number
    }
  }]
})

CartSchema.plugin(mongoosePaginate)
const Carts = model("carts", CartSchema);

export default Carts;