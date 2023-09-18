const modalContainer = document.getElementById("modal-container"); 
const verCarrito = document.getElementById("verCarrito"); 

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

verCarrito.addEventListener("click", pintarHeader);  
 
function pintarHeader() {   
  modalContainer.innerHTML = "";  
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Tu Carrito</h1> 
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
    let bodyCarrito = document.createElement("div"); 
    bodyCarrito.className = "modal-content"; 
    bodyCarrito.id = 'modalContent'; 
    bodyCarrito.innerHTML = `      
    <img src="${producto.img}">  
    <h5>${producto.titulo}</h5> 
    <p>${producto.precio} $</p>    
    <span class="resta"> - </span>
    <p>${producto.cantidad}</p> 
    <span class="suma"> + </span> 
    <p>Total: ${producto.cantidad * producto.precio} $</p>
    <span class="borrar-producto">
    <i class="bi bi-trash-fill"></i>    
    </span>   
    
    `;  
    
    modalContainer.append(bodyCarrito);  
 
    let resta = bodyCarrito.querySelector(".resta");

    resta.addEventListener("click", () => {
      if (producto.cantidad !== 1) { 
        producto.cantidad--;  
      }  
      guardarEnLocal(); 
      carritoNumero();  
      pintarHeader();
    });   

    let suma = bodyCarrito.querySelector(".suma");
    suma.addEventListener("click", () => {
      producto.cantidad++;  
      guardarEnLocal(); 
      carritoNumero();  
      pintarHeader();
    }); 


    let eliminar = bodyCarrito.querySelector(".borrar-producto");
     
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
    <button id="vaciarCarrito" class="modal-footer-button-vaciar">Vaciar Carrito</button> 
    <p class="modal-footer-total">Total: <span id="nroTotal">${total}$</span></p>
    <button id="comprar" class="modal-footer-button-comprar">Comprar</button>   
    `;      

     modalContainer.append(elementDiv);    
     
     let vaciarCarrito = document.getElementById("vaciarCarrito");
     vaciarCarrito.addEventListener("click", () => {
      let modalContenido =  document.querySelectorAll(".modal-content");
      modalContenido.forEach((item) => {
       item.parentNode.removeChild(item); 
      })
      document.getElementById("nroTotal").innerText = "0$";  
      miCarrito.length = 0;  
      carritoNumero();   
      guardarEnLocal(); 

      })

     const btnComprar = document.getElementById("comprar");
     btnComprar.addEventListener("click", () => {
        if( miCarrito.length > 0 && total > 0) { 
          compraExistosa();
          modalContainer.style.display = "none"; 
          miCarrito.length = 0;  
          numerito.innerText = 0;   
          guardarEnLocal();     
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
  pintarHeader();            
};     


function carritoNumero() {  
  let nuevoNumeroCarrito = miCarrito.reduce((acc, producto) => acc + producto.cantidad, 0) 
   numerito.innerText = nuevoNumeroCarrito;                    
}     
 

