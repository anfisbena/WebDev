import {Schema,SchemaTypes,model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const MessageSchema = new Schema({
  chat:{
      type: SchemaTypes.ObjectId,
      ref: "chats"
    },
  user:{
      type:SchemaTypes.ObjectId,
      ref: "users"
    },
  message:{
    type: String,
    required:true
  },
  date: Date
});

MessageSchema.plugin(mongoosePaginate)
const Message = model("messages", MessageSchema);

export default Message;