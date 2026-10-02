// ============================================================================
// DESAFÍO: PROCESADOR DE INVENTARIO - TIENDA ESPACIAL (COMPLETO)
// Conceptos a trabajar:
// 1. Funciones Flecha (Arrow Functions)
// 2. Métodos .map(), .filter(), .sort() y .reduce()
// 3. Desestructuración de Objetos y Arrays
// 4. Operador Spread (...)
// ============================================================================

// DATOS INICIALES DE PRUEBA
const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];

// ----------------------------------------------------------------------------
// INSTRUCCIÓN 1: Aplicar Descuento a 'Equipamiento'
// Crea una función flecha `aplicarDescuento` que reciba un array de productos.
// Usa `.map()` para devolver un NUEVO array donde los productos de categoría 
// 'Equipamiento' tengan un 10% de descuento en el precio.
// PISTA: Usa el Spread Operator (`...`) dentro de `.map()` para no mutar los objetos originales.
// ----------------------------------------------------------------------------

// Tu código aquí:
const aplicarDescuento = (productos) => {
    productos.map((producto) =>{
    if(producto.categoria == "Equipamiento"){
        return {
            ...producto, precio: producto.precio - (producto.precio * 0.10)
           
        } 
    }
     return producto
    })}



const arrayDescontado = aplicarDescuento(productos)


// ----------------------------------------------------------------------------
// INSTRUCCIÓN 2: Formatear Mensajes
// Crea una función flecha `generarEtiquetas` que tome un array de productos.
// Usa `.map()` desestructurando los parámetros de la función flecha ({ nombre, precio })
// para devolver un array de strings con formato: "Producto: [nombre] - Precio: $[precio]"
// ----------------------------------------------------------------------------

// Tu código aquí:
 const generarEtiquetas = (productos) => {
    productos.map(({nombre, precio}) => {
        return `Producto: ${nombre} - Precio: ${precio}`
    })
 }

 console.log(generarEtiquetas(productos))

