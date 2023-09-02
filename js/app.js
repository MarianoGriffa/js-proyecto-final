 
 const productos = [
    //  billeteras 
    {
      id: 'Billetera-04',
      titulo: 'Maxi Billetera Negra',
      img: './img/billeteras/billetera-negra.jpg',
      categoria: {
        nombre: 'Billeteras',  
        id: 'billeteras',  
      } ,  
      precio: 3500, 
      stock: 3,  
      cantidad: 0
    
    },
   {
    id: 'Billetera-02', 
    titulo: 'Maxi Billetera Naranja',
    img: './img/billeteras/billetera-naranja.jpg',
    categoria: {
      nombre: 'Billeteras', 
      id: 'billeteras',  
    } ,
    precio: 3500, 
    stock: 1,  
    cantidad: 0
   
  },
  { 
    id: 'Billetera-03', 
    titulo: 'Maxi Billetera Gris',
    img: './img/billeteras/billetera-natural.jpg',
    categoria: {
      nombre: 'Billeteras',  
      id: 'billeteras', 
    } ,
    precio: 3500, 
    stock: 4,  
    cantidad: 0
  
  } ,
  { 
    id: 'Billetera-04', 
    titulo: 'Maxi Billetera Rosa',
    img: './img/billeteras/billetera-rosa.jpg',
    categoria: {
      nombre: 'Billeteras',   
      id: 'billeteras', 
    } ,
    precio: 3500, 
    stock: 3,  
    cantidad: 0 
  
  } ,
    
  // Carteras  
  {
    id: 'cartera-01',
    titulo: 'Lisboa Negra',
    img: './img/carteras/01.jpeg',
    categoria: { 
      nombre: 'Carteras',     
      id: 'carteras'  
    }, 
    precio: 9000, 
    stock: 2,  
    cantidad: 0 
  },
  {
    id: 'cartera-02',
    titulo: 'Lisboa Suela',
    img: './img/carteras/02.webp',
    categoria: {  
      nombre: 'Carteras',   
      id: 'carteras'    
    },
    precio: 9000,   
    stock: 4,  
    cantidad: 0  
  },
  {
    id: 'cartera-03',
    titulo: 'Venecia Perla',
    img: './img/carteras/03.webp',
    categoria: { 
      nombre: 'Carteras',    
      id: 'carteras'   
    } ,
    precio: 9000,  
    stock: 3,
    cantidad: 0
  }, 
  {
    id: 'cartera-14',
    titulo: 'Valencia Negra',
    img: './img/carteras/14.webp',
    categoria: {  
      nombre: 'Carteras',     
      id: 'carteras'   
    } ,
    precio: 9000, 
    stock: 2,  
    cantidad: 0 
  
  },
  {
    id: 'cartera-08',
    titulo: 'Mini Venecia Azul',
    img: './img/carteras/08.webp',
    categoria: {  
      nombre: 'Carteras',   
      id: 'carteras'   
    },
    precio: 9000,  
    stock: 2,  
    cantidad: 0 
  },
  { 
    'id': 'cartera-15',
    'titulo': 'Valencia Perla',
    'img': './img/carteras/15.webp',
    categoria: {  
      nombre: 'Carteras',   
      id: 'carteras',   
    } , 
    precio: 9000, 
    stock: 2,  
    cantidad: 0 
   
  }, 
  { 
    'id': 'cartera-11',
    'titulo': 'Velvet Magenta',
    'img': './img/carteras/11.jpg',
    categoria: {  
      nombre: 'Carteras',   
      id: 'carteras',   
    } , 
    precio: 9000, 
    stock: 2,  
    cantidad: 0 
   
  }, 
  { 
    'id': 'cartera-13',
    'titulo': 'Velvet Negra',
    'img': './img/carteras/13.jpg',
    categoria: {  
      nombre: 'Carteras',   
      id: 'carteras',   
    } ,  
    precio: 9000, 
    stock: 1,  
    cantidad: 0  
   
  }, 

  // Sobres
  { 
    id: 'sobre-01',
    titulo: 'Clasico Negro',
    img: './img/sobres/01.jpeg',
    categoria: { 
      nombre: 'Sobres',   
      id: 'sobres'     
    },
    precio: 6000,
    stock: 2,   
    cantidad: 0    
  },  
  {
    id: 'sobre-03',
    titulo: 'Clasico verde',
    img: './img/sobres/03.webp',
    categoria: { 
      nombre: 'Sobres',   
      id: 'sobres'    
    },
    precio: 6000,
    stock: 1,  
    cantidad: 0    
  }, 
  {
    id: 'sobre-04',
    titulo: 'Clasico azul',
    img: './img/sobres/04.webp',
    categoria: { 
      nombre: 'Sobres',    
      id: 'sobres'    
    },
    precio: 6000,
    stock: 2,  
    cantidad: 0    
  }, 
  {
    id: 'sobre-05',
    titulo: 'Clasico fucsia',
    img: './img/sobres/05.webp',
    categoria: { 
      nombre: 'Sobres',    
      id: 'sobres'    
    },
    precio: 6000, 
    stock: 0,  
    cantidad: 0   
  }
 
 ];
 
 const containerProductos = document.querySelector('#container-productos');
 const botonCategoria = document.querySelectorAll('.boton-categoria');  
 const titleMain = document.querySelector('#title-main');  
 let btnAgregar = document.querySelectorAll('.producto-agregar');   
 const numerito = document.querySelector('#numerito'); 

  
  //Creamos un array donde seran guardados mis producto en el carrito.👇
 //agregarAlcarrito()  
 //Pintamos mis productos en pantalla y [] 
 function cargarProductos(productosElegidos) {   
   containerProductos.innerHTML = '';       
     
   productosElegidos.forEach( producto => {    
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
     <button class="producto-agregar" id="${producto.id}">Agregar al Carrito  
      </buton>     
     </div>            
     `;           
       
        containerProductos.append(elDiv);  

      }) 
      
      btnAgregarProducto();  
    } 
    
    cargarProductos(productos);     
    
    // Logica para filtrar productos cuando le damos click a una 👉 categoria (producto) 
    botonCategoria.forEach( btn  => {
      btn.addEventListener('click', e => {
         
        botonCategoria.forEach( boton => boton.classList.remove('active')) 
        e.currentTarget.classList.add('active')

  
        if ( e.currentTarget.id != "todos" ) {  
          const categoriaSeleccionada = productos.find( producto => producto.categoria.id === e.currentTarget.id);    
          titleMain.innerHTML = categoriaSeleccionada.categoria.nombre;
           
          const productoFiltrado = productos.filter( producto => producto.categoria.id === e.currentTarget.id );     
          
          cargarProductos(productoFiltrado);         
          
        } else {
          titleMain.innerText = "Todos los productos"; 
          cargarProductos(productos);              
        }      
         
      })
    })
    
    
    // Lógica agregar productos al carrito,recorremos cada uno de los botones
      function btnAgregarProducto() {
      btnAgregar = document.querySelectorAll('.producto-agregar');  
      
      
      btnAgregar.forEach( btn => {
        btn.addEventListener('click', agregarAlCarrito );
      })    
    }  

    //logica para agregar mis producto en carrito[], si existen o no en el localStorage
    let productosEnCarrito; 
    let productosEnCarritoLS = localStorage.getItem('producto-en-carrito');
      
    if(productosEnCarritoLS) {
      productosEnCarrito = JSON.parse(productosEnCarritoLS) 
      actualizarNumerito()
    } else {
      productosEnCarrito = [];           
    } 
     
  
  //Validamos si el producto agregado tiene stock, sumamos la cantidad.
   //En caso contrario devolvemos un error
    function agregarAlCarrito(e) {
      
      Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {  
          /*background: "linear-gradient(to right, #4b33a8, #785ce9)",*/
          background: "linear-gradient(135deg, #763D29, #75D717)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          borderRadius: "2rem",
          textTransform: "uppercase",   
          fontSize: ".75rem" 
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();  
      
      function noStockAlert() { 
        Swal.fire({ 
            title: 'SIN STOCK',
            text: 'No hay stock o ya selecionaste el total disponible',
            icon: 'error',   
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            },
            color: 'black',
            background: 'white'  
        });  
       }

      const idBoton = e.currentTarget.id;
      const productoAgregado = productos.find(producto =>  producto.id === idBoton); 
        
    if(productoAgregado && productoAgregado.stock > 0 )   {  
        productosEnCarrito.stock = productoAgregado.stock--; 
        productosEnCarrito.cantidad = productoAgregado.cantidad++; 

      } else {   
        productoAgregado.id.disabled = true;             
        noStockAlert();  
      }     
     
   if(productosEnCarrito.some( producto => producto.id === idBoton )) {
      const index = productosEnCarrito.findIndex( producto => producto.id === idBoton); 
      productosEnCarrito[index];       
        
   }else {
     productoAgregado.cantidad = 1;   
     productosEnCarrito.push(productoAgregado);                 
   }     
     
   actualizarNumerito();  
 
   
   localStorage.setItem('producto-en-carrito', JSON.stringify(productosEnCarrito))  
  
}    
 
//Actualizamos el numero de los productos que se van cargando al carrito[]
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0) 
     numerito.innerText = nuevoNumerito;         
               
  }     


  
   
