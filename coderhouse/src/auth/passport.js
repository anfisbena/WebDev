import passport from "passport";
import local from "passport-local";
import github from "passport-github2";
import User from "../dao/mongo/models/users.model.js";
import {hash,validatePassword} from '../utils.js';
import {config} from 'dotenv';

config();
const localStrategy=local.Strategy;
const GitHubStrategy=github.Strategy;

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
    }
  ))
  
  passport.use('login',new localStrategy({usernameField:'email'},
    async(username,password,done)=>{
      try{
        let user=await User.findOne({email:username}).lean()
        if(!validatePassword(user,password)){return done(null,false)}
        else{
          delete user.password
          return done(null,user)}
      }
      catch(err){
        done('Error user not found '+err)
      }
    }
  ))

  passport.use('githubAuth',new GitHubStrategy({
    clientID:process.env.GITHUB_CID,
    clientSecret:process.env.GITHUB_SECRET,
    callbackURL:process.env.GITHUB_URL,
    },
    async(accessToken,refreshToken,profile,done)=>{
      try{
        console.log(profile)
        let user =await User.findOne({email:profile._json.email})
        if(!user){
          const newUser={
            first_name:profile._json.name,
            last_name:'',
            email:profile._json.value,
            role:'user',
            password:''
          }
          let result=user=await User.create(newUser)
          return done(null,result)
        }
        else{
          return done(null,user)
        }
      }
      catch(err){
        done(err)
      }
    }
  ))
  
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

export default initializePassport;