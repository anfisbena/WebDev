import passport from "passport";
import local from "passport-local";
import User from "../dao/mongo/models/users.model";
import {hash,validatePassword} from '../utils.js';

const localStrategy=local.Strategy;

const initializePassport=()=>{
  passport.use('register',new localStrategy({passReqToCallback:true,usernameField:'email'},
    async(req,username,password,done)=>{
      try{
        const {first_name,last_name,email,role}=req.body;
        let user=await User.findOne({email:username})
        if(user){
          return done(null,false)//(error,return a user,return a message)
        }
        else{
          const newUser={
            first_name,
            last_name,
            email,
            password:hash(password),
            role
          }
          const result=await User.create(newUser)
          return done(null,result)
        }
      }
      catch(err){
        done('Error user not found '+err)
      }
    }))

  passport.use('login',new localStrategy({}))
  
  passport.serializeUser((user,done)=>{
    done(null,user._id)
  })

  passport.deserializeUser(async(id,done)=>{
    try{
      const user=await User.findById(id)
      done(null,user)
    }
    catch(err){
      done(err)
    }
  })
  
}