import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

const User = mongoose.model('User', cartsSchema);
export default User;