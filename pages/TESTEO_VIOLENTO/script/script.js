let heladoDisponible,vuelto,total,boleto,cantidadBoletos;
let usuarios={
  us01:{name:'Roberto',money:0},
  us02:{name:'Pedro',money:0},
  us03:{name:'Cofla',money:0},
}
for(let usuario in usuarios){
  usuarios[usuario].money=prompt(`ingresa cuanto tienes ${usuarios[usuario].name}`);
}

let helados={
  h1:{price:0.6,name:'Palito de helado de agua'},
  h2:{price:1,name:'Palito de helado con crema'},
  h3:{price:1.6,name:'Bombón de helado marca Heladix'},
  h4:{price:1.7,name:'Bombón de helado marca Heladovich'},
  h5:{price:1.8,name:'Bombón de helado marca Helardo'},
  h6:{price:2.9,name:'Potecito de helado con confites'},
  h7:{price:2.9,name:'Pote de 1/4 KG'},



};

for (let usuario in usuarios){ 
  if (usuarios[usuario].money<=0.6){heladoDisponible=`${usuarios[usuario].name}, andate mas bien que das es lastima`;}
  else if(usuarios[usuario].money>=2.9){heladoDisponible=`${usuarios[usuario].name}, Podes escoger entre ${helados.h7.name} y ${helados.h6.name}, ambos cuestan $2.9 y te dan un vuelto de $${(usuarios[usuario].money-2.9).toFixed(2)}`;}
  else{
    for(let helado in helados){
      if(usuarios[usuario].money<helados[helado].price){continue;}
      else{heladoDisponible=`${usuarios[usuario].name}, con tus ${usuarios[usuario].money} puedes comprarte un ${helados[helado].name}, que vale ${helados[helado].price} y te dan un vuelto de $${(usuarios[usuario].money-helados[helado].price).toFixed(2)}`;}
    }
  }
  document.write(`<h1>${heladoDisponible}</h1>`);
};

total=parseFloat(usuarios.us01.money)+parseFloat(usuarios.us02.money)+parseFloat(usuarios.us03.money);

if(total>=2.9){heladoDisponible=`podrían escoger entre ${helados.h7.name} y ${helados.h6.name}, este helado cuesta C/U $${helados.h7.price}, lo que deja un vuelto de $${(total-helados.h7.price).toFixed(2)}`;}
else if(total>=1.8&&total<2.9){  heladoDisponible=`podrían escoger ${helados.h5.name}, este helado cuesta $${helados.h5.price}, lo que deja un vuelto de $${(total-helados.h5.price).toFixed(2)}`;}
else if(total>=1.7&&total<1.8){  heladoDisponible=`podrían escoger ${helados.h4.name}, este helado cuesta $${helados.h4.price}, lo que deja un vuelto de $${(total-helados.h4.price).toFixed(2)}`;}
else if(total>=1.6&&total<1.7){  heladoDisponible=`podrían escoger ${helados.h3.name}, este helado cuesta $${helados.h3.price}, lo que deja un vuelto de $${(total-helados.h3.price).toFixed(2)}`;}
else if(total>=1&&total<1.6){  heladoDisponible=`podrían escoger ${helados.h2.name}, este helado cuesta $${helados.h2.price}, lo que deja un vuelto de $${(total-helados.h2.price).toFixed(2)}`;}
else if(total>=0.6&&total<1){  heladoDisponible=`podrían escoger ${helados.h1.name}, este helado cuesta $${helados.h1.price}, lo que deja un vuelto de $${(total-helados.h1.price).toFixed(2)}`;}
else{heladoDisponible=`No podrían escoger ningún helado`;}

document.write(`<h1>Pero si reunen todo, en total tendrían $${(total).toFixed(2)}, ${heladoDisponible}</h1>`);
/* 
boleto=13;
vuelto=total-heladoCaro.price;
if(vuelto/boleto>3){
  cantidadBoletos=` 3 boletos y devuelve $${vuelto-boleto*3}`;
}else{
  cantidadBoletos=`${Math.floor(vuelto/boleto)} boletos y devuelve $${vuelto%boleto}`;
}
document.write(`Presupuesto total es ${total} 
  y te alcanza para comprar ${heladoCaro.name}, 
  ademas de eso te sobran ${vuelto}<br/>
  Ahora bien, el gamin va comparar ${cantidadBoletos}`);
*/