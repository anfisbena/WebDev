class usuario{

  muestraCheckOut(){
    let total=0;
    for(let i=1;i<sessionStorage.length;i++){
      let data=JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
      document.querySelector('.list-group-item.d-flex.justify-content-between.listaItems').insertAdjacentHTML("beforebegin",
      `<li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0 ">${data.id}</h6>
            <small class="text-muted">${data.cantidad} UDS, a $${data.valorUD} C/U</small>
          </div>
          <span class="text-muted">$${data.cantidad*data.valorUD}</span>
      </li>`);
      
      total=total+data.cantidad*data.valorUD;
    }
    document.getElementById('Total').innerHTML=`$${total}`;
  }
  
  submission(){
    document.querySelector(".needs-validation.submission").onsubmit=(e)=>{
      e.preventDefault();
      Swal.fire({
        title: 'Gracias!',
        text: 'Esperamos que disfrutes de tu compra',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    sessionStorage.clear();
  }

}

const usuarioActual=new usuario();
usuarioActual.muestraCheckOut();
usuarioActual.submission();

//contador de items
