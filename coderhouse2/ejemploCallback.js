//1:31

import fs from 'fs';
import blob from 'buffer';
let time=new Date().toString();


const funcion =async()=>{
  let database=await fs.promises.readFile('./items.json','utf-8',(err,data)=>(err??data))
  database=JSON.parse(database)
  database=[...database,{'caca':database.length}]
  console.log(database)
  await fs.promises.writeFile('./items.json',JSON.stringify(database),(err)=>(err??'ok'))
}

funcion();