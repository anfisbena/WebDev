import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String
  }
);

const User = mongoose.model('usuarios', UserSchema);

export default User;