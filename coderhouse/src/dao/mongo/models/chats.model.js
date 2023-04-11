import {Schema,model} from "mongoose";

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

const Chat = model('chats', ChatSchema);
export default Chat;