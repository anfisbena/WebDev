import mongoose from 'mongoose';

const userCollection='usuarios' //nombre de coleccion en BDD
const userSchema=new mongoose.Schema({
  first_name:String,
  last_name:String,
  email:{
    type:String,
    unique:true
  }
})

export const userModel=mongoose.model(userCollection,userSchema);