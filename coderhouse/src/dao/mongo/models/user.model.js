import {Schema,model} from 'mongoose';

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        index:true
    }
});

const User = model('users', UserSchema);
export default User;