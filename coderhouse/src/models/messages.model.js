import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: String,  
  message: String
});

const Message = mongoose.model("messages", messageSchema);

export default Message;