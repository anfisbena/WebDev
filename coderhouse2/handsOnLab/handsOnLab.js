import fs from 'fs';

const GenerateShit=()=>{
  let obj=[];
  let times=1000;
  for(let i=1;i<=times;i++){
    let numero=Math.floor(Math.random() * 100);
    let encontrado=obj.findIndex(val=>val.id===numero)
    encontrado===-1
    ?obj.push(
      {
      id:numero,
      cuenta:1
      }
    )
    :obj[encontrado]=
    {
      id:numero,
      cuenta:obj[encontrado].cuenta+1
    }
  }
  fs.promises.writeFile('./handsOnLab.json',JSON.stringify(obj,null,"\t"),(err,data)=>err??data)
}

GenerateShit()