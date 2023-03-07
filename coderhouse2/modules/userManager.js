import fs from 'fs';
import crypto from 'crypto';

export default class userManager{
  
  constructor(path){
    this.path=path;
    this.users=null;
  }

  getUsers=async()=>{
    try{
      let data=await fs.promises.readFile(this.path);
      this.users=JSON.parse(data)
    }
    catch(err){
      console.log(err)
    }    
  }
  
  addUser=async(usuario)=>{
    //validation rules
    this.users??await this.getUsers()
    //encrypt password
    usuario.salt=crypto.randomBytes(128).toString('base64')
    usuario.contrasena=crypto
      .createHmac('sha256',usuario.salt)
      .update(usuario.contrasena)
    //update database
    try{
      await fs.promises.writeFile(this.path,JSON.stringify([...this.users,usuario],null,"\t"))
    }
    catch(err){
      console.log(err)
    }
  }
}

