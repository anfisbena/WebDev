import fs from 'fs';
import crypto from 'crypto';

class userManager{
  constructor(){
    this.path='./database/users.json';
  }

  getUsers=async()=>(
    await fs.promises.readFile(this.path)
    .then(data=>JSON.parse(data))
  )
  
  addUser=async(usuario)=>{
    usuario.salt=crypto.randomBytes(128).toString('base64')
    usuario.contrasena=crypto
      .createHmac('sha256',usuario.salt)
      .update(usuario.contrasena)

    this.getUsers()
      .then(obj=>[...obj,usuario])
      .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj,null,"\t")))
    }
}

const user=new userManager();
console.log(user.getUsers())
user.addUser({"nombre":"coño","apellido":"Perez","nombreUsuario":'juanperez',"contrasena":'1234'})