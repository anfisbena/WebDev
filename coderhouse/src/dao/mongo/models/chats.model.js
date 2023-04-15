import {Schema,model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const ChatSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  users:[{
    type: Schema.Types.ObjectId,
    ref:"users"
  }],
});

ChatSchema.plugin(mongoosePaginate)
const Chat = model('chats', ChatSchema);
export default Chat;