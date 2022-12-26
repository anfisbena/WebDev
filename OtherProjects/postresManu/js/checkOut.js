class usuario{

  muestraCheckOut(){
    let carrito=sessionStorage.carrito?
      JSON.parse(sessionStorage.carrito):
      Swal.fire({
        title: 'Alerta!',
        text: 'no tienes items en tu carrito',
        icon: 'warning',
        confirmButtonText: 'Cool'
      }).then(()=>{window.history.go(-1)});
    let total=0;
    carrito.forEach(element=>{
      document.querySelector('.list-group-item.d-flex.justify-content-between.listaItems').insertAdjacentHTML("beforebegin",
        `<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0 ">${element.nombre}</h6>
              <small class="text-muted">${element.cantidad} UDS, a $${element.valorUD} C/U</small>
            </div>
            <span class="text-muted">$${element.cantidad*element.valorUD}</span>
        </li>`);
      
      total=total+element.cantidad*element.valorUD;
    })
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
      }).then(()=>{window.history.go(-1)})
    }
    sessionStorage.clear();
  }

}

const usuarioActual=new usuario();
usuarioActual.muestraCheckOut();
usuarioActual.submission();

//contador de items
