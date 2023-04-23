import {config} from 'dotenv';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import session from 'express-session';

config();

const DB={
  NAME:process.env.DB_NAME,
  USER:process.env.DB_USER,
  PASS:process.env.DB_PASSWORD,
};

export const loadDatabase=async()=>{
  return await mongoose.connect(`mongodb+srv://${DB.USER}:${DB.PASS}@cluster0.bsrdbik.mongodb.net/${DB.NAME}?retryWrites=true&w=majority`)
}

export const loadLogin=session(
  {
    store:MongoStore.create({
      mongoUrl :`mongodb+srv://${DB.USER}:${DB.PASS}@cluster0.bsrdbik.mongodb.net/${DB.NAME}`,
      mongoOptions:{
        useNewUrlParser:true,
        useUnifiedTopology:true
      },
      ttl:15
    }),
    secret:'kk420',
    resave:false,
    saveUninitialized:false,
  }
)

export default {loadDatabase,loadLogin};