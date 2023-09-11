
let modalContainer = document.getElementById('modal-container');
let verCarrito = document.getElementById("verCarrito");

function compraExistosa() {
  Swal.fire({
    position: 'top-center',
    icon: 'success', 
    title: 'Compra existosa',
    showConfirmButton: false, 
    timer: 1500 
  }) 
}
function carritoVacio() {
  Swal.fire({ 
    icon: 'warning', 
    title: 'Carrito Vacio', 
    text: 'Compra algo..',
  })     
}


verCarrito.addEventListener('click', modalCarrito);  

function modalCarrito() {   
  modalContainer.innerHTML = "";  
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Mi Carrito</h1> 
  `;
  modalContainer.append(modalHeader); 
  
  const modalbutton = document.createElement("h1");
  modalbutton.className = "modal-header-button";
  modalbutton.innerText = "x";  
  
  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });   
   
  modalHeader.append(modalbutton);
  
  pintarUnProducto(); 
  pintarFooter(); 
};      


function pintarUnProducto() {
  miCarrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = ` 
    <img src="${producto.img}"> 
    <h3>${producto.categoria.nombre}</h3> 
    <p>${producto.precio} $</p>  
    <p>${producto.cantidad}</p>  
    <p>Total: ${producto.cantidad * producto.precio} $</p>
    <span class="borrar-producto">
    <i class="bi bi-trash-fill"></i>   
    </span> 
    
    `;  
    
    modalContainer.append(carritoContent); 

    
    let eliminar = carritoContent.querySelector(".borrar-producto");
     
    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);       
    });  
      
  });
}


function pintarFooter() {
  let total = miCarrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const elementDiv = document.createElement("div"); 
  elementDiv.className = "modal-footer";
  elementDiv.innerHTML = ` 
    <p class="modal-footer-total">Total a pagar: <span>${total}$</span></p>
    <button id="comprar" class="modal-footer-button">Comprar</button>  
    `;     

     modalContainer.append(elementDiv);       
    
     const btnComprar = document.getElementById("comprar");
     btnComprar.addEventListener("click", () => {
        if(total > 0) {
          compraExistosa();
          modalContainer.style.display = "none";  
        }  else {
          carritoVacio();
          btnComprar.disabled = true;
          modalContainer.style.display = "none";   
        }
     }) 
}  

function eliminarProducto(idBorrar) { 
  const findId = miCarrito.find((producto) => producto.id === idBorrar);
  miCarrito = miCarrito.filter((carritoId) => carritoId !== findId );
     

  carritoNumero();
  guardarEnLocal();     
  modalCarrito();        
};    


function carritoNumero() {  
  let nuevoNumeroCarrito = miCarrito.reduce((acc, producto) => acc + producto.cantidad, 0) 
   numerito.innerText = nuevoNumeroCarrito;                   
}    


