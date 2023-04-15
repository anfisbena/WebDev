import {Schema,model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        index:true
    }
});

UserSchema.plugin(mongoosePaginate);
const User = model('users', UserSchema);
export default User;