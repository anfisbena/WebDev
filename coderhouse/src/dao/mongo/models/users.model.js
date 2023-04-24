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
            required:true
        },
        email: 
        {
            type: String,
            unique: true,
            index:true
        },
        password:{
            type:String,
            required:true,
            minlength:4,
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