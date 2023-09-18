 const containerProductos = document.getElementById("container-productos");   

 function mostramosCardProductos(productoSelec) { 
   containerProductos.innerHTML = "";   
   productoSelec.forEach(producto => { 
    const elDiv = document.createElement("div"); 
    elDiv.classList.add('producto');           
    elDiv.innerHTML = `       
    <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">    
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="producto-precio">$${producto.precio}</p>        
    </div>                   
    `;    

     containerProductos.append(elDiv);  

    let agregarAlCarrito = document.createElement("button");
    agregarAlCarrito.innerText = "Agregar al Carrito";
    agregarAlCarrito.className = "producto-agregar";
    
    elDiv.append(agregarAlCarrito);  

     agregarAlCarrito.addEventListener("click", () => {
       const repetido = miCarrito.some((productoRepetido) => productoRepetido.id === producto.id);
       
       if (repetido) {
        miCarrito.map( (item) => {
           if (item.id === producto.id) { 
            item.cantidad++;    
           }        
         }); 
       } else {
        miCarrito.push({
           id: producto.id, 
           img: producto.img, 
           titulo: producto.titulo,
           precio: producto.precio,
           cantidad: producto.cantidad,  
         });
      
        carritoNumero();
        guardarEnLocal();
       }
     }) 
    
    })
    }
 
  mostramosCardProductos(productos); 
 
  let miCarrito = JSON.parse(localStorage.getItem("mis-productos")) || []; 
    
  function guardarEnLocal() {
      localStorage.setItem("mis-productos", JSON.stringify(miCarrito))  
  };    
 



  
   
