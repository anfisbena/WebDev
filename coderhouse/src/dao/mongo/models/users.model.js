import {Schema,model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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
        },
        email: 
        {
            type: String,
            unique: true,
            index:true
        },
        password:{
            type:String,
        },
        role:
        {
            type:String,
            enum:['admin','user'],
            default:'user'
        }
    }
);


UserSchema.plugin(mongoosePaginate);
const User = model('users', UserSchema);
export default User;