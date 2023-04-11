import {Schema,model} from "mongoose";

const messageSchema = new Schema({
  chat:{
      type: Schema.Types.ObjectId,
      ref: "chats"
    },
  user:{
      type:Schema.Types.ObjectId,
      ref: "users"
    },
  message:{
    type: String,
    required:true
  },
  date: Date
});

const Message = model("messages", messageSchema);

export default Message;