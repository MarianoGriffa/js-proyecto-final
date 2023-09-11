 const containerProductos = document.getElementById('container-productos');
 const botonCategoria = document.querySelectorAll('.boton-categoria');  
 const tituloPrincipal = document.getElementById('titulo-principal');  
 const numerito = document.getElementById('numerito');  
    
 function pintarProductos(productoSeleccionado) {

   containerProductos.innerHTML = '';        
   productoSeleccionado.forEach( producto => {     
     const elDiv = document.createElement('div');   
     elDiv.classList.add('producto');       
     elDiv.innerHTML = `    
     <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
     <div class="producto-detalles">        
     <h3 class="producto-title">${producto.titulo}</h3>
     <div class="producto-precio-stock">  
     <p class="producto-precio">$${producto.precio}</p>    
     <p class="producto-stock">Stock: ${producto.stock}</p>
     </div> 
     <button class="producto-agregar" id="${producto.id}">
      Agregar al Carrito    
      </buton>      
     </div>            
     `;            
       
      containerProductos.append(elDiv);  

      }) 
      
      botonAgregarUnProducto();    
    } 
    
    pintarProductos(productos);       
    

    botonCategoria.forEach( boton  => {
      boton.addEventListener('click', ({ target }) => {        
          
        botonCategoria.forEach( boton => boton.classList.remove('active')) 
        target.classList.add('active')
 

        if ( target.id != "productos-todos" ) {   
          const categoriaSeleccionada = productos.find( producto => producto.categoria.id === target.id);      
          tituloPrincipal.innerHTML = categoriaSeleccionada.categoria.nombre;
            
          const productoFiltrado = productos.filter( producto => producto.categoria.id === target.id );      
           
          pintarProductos(productoFiltrado);          
           
        } else {
          tituloPrincipal.innerText = "Todos"; 
          pintarProductos(productos);                 
        }        
         
      })
    })

      
      function botonAgregarUnProducto() { 
        let botonAgregar = document.querySelectorAll('.producto-agregar');
        botonAgregar.forEach( btn => btn.addEventListener('click', agregarAlCarrito ))    
      }    

     let miCarrito = JSON.parse(localStorage.getItem("mis-productos")) || []; 
  
    function agregarAlCarrito( e ) {   
      
      
      const boton_id = e.currentTarget.id;
      const productoAgregado = productos.find(producto =>  producto.id === boton_id); 
        
    if(productoAgregado && productoAgregado.stock > 0 )   {  
        miCarrito.stock = productoAgregado.stock--; 
        miCarrito.cantidad = productoAgregado.cantidad++;  
 
      } else {    
        productoAgregado.id.disabled = true;  
        Swal.fire({
          icon: 'error', 
          title: 'Error...', 
          text: 'No hay stock o seleccionaste el total disponible!',
        })                 
      }       
     
      if(miCarrito.some( producto => producto.id === boton_id )) {
          const indice = miCarrito.findIndex( producto => producto.id === boton_id); 
          miCarrito[indice];           
        
        }else {  
          productoAgregado.cantidad = 1;   
          miCarrito.push(productoAgregado);                 
        }      
          
      actualizamosNumerito();  
      guardarEnLocal(); 
 
    }     

    function actualizamosNumerito() {
      let nuevoNumero = miCarrito.reduce((acc, producto) => acc + producto.cantidad, 0) 
       numerito.innerText = nuevoNumero;                 
    }      
 
      function guardarEnLocal() {
          localStorage.setItem('mis-productos', JSON.stringify(miCarrito))  
      };    
    



  
   
