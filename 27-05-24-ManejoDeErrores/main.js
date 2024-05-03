let productos = null
productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 19.99,
        cantidad: 10,
        descripcion: "Camiseta de algodón de manga corta",
        categoria: "Ropa"
    },
    {
        id: 2,
        nombre: "Zapatos",
        precio: 59.99,
        cantidad: 5,
        descripcion: "Zapatos de cuero elegantes",
        categoria: "Calzado"
    },
    {
        id: 3,
        nombre: "Pantalones",
        precio: 34.99,
        cantidad: 8,
        descripcion: "Pantalones vaqueros ajustados",
        categoria: "Ropa"
    },
    {
        id: 4,
        nombre: "Bolso",
        precio: 49.99,
        cantidad: 3,
        descripcion: "Bolso de mano de cuero",
        categoria: "Accesorios"
    },
    {
        id: 5,
        nombre: "Reloj",
        precio: 79.99,
        cantidad: 2,
        descripcion: "Reloj de pulsera resistente al agua",
        categoria: "Accesorios"
    },
    {
        id: 6,
        nombre: "Gafas de sol",
        precio: 29.99,
        cantidad: 6,
        descripcion: "Gafas de sol con protección UV",
        categoria: "Accesorios"
    },
    {
        id: 7,
        nombre: "Vestido",
        precio: 39.99,
        cantidad: 4,
        descripcion: "Vestido elegante de noche",
        categoria: "Ropa"
    },
    {
        id: 8,
        nombre: "Bolígrafo",
        precio: 2.99,
        cantidad: 20,
        descripcion: "Bolígrafo de tinta negra",
        categoria: "Papelería"
    },
    {
        id: 9,
        nombre: "Libreta",
        precio: 5.99,
        cantidad: 15,
        descripcion: "Libreta de tapa dura con rayas",
        categoria: "Papelería"
    },
    {
        id: 10,
        nombre: "Mochila",
        precio: 39.99,
        cantidad: 7,
        descripcion: "Mochila resistente con múltiples compartimentos",
        categoria: "Accesorios"
    },
    {
        id: 11,
        nombre: "Chaqueta",
        precio: 79.99,
        cantidad: 3,
        descripcion: "Chaqueta de cuero",
        categoria: "Ropa"
    },
    {
        id: 12,
        nombre: "Botines",
        precio: 69.99,
        cantidad: 4,
        descripcion: "Botines de tacón alto",
        categoria: "Calzado"
    },
    {
        id: 13,
        nombre: "Gorra",
        precio: 14.99,
        cantidad: 10,
        descripcion: "Gorra de béisbol",
        categoria: "Accesorios"
    },
    {
        id: 14,
        nombre: "Pendientes",
        precio: 9.99,
        cantidad: 8,
        descripcion: "Pendientes de plata con piedras",
        categoria: "Accesorios"
    },
    {
        id: 15,
        nombre: "Camisa",
        precio: 24.99,
        cantidad: 12,
        descripcion: "Camisa de vestir",
        categoria: "Ropa"
    },
    {
        id: 16,
        nombre: "Calcetines",
        precio: 4.99,
        cantidad: 15,
        descripcion: "Calcetines de algodón",
        categoria: "Ropa"
    },
    {
        id: 17,
        nombre: "Billetera",
        precio: 19.99,
        cantidad: 6,
        descripcion: "Billetera de cuero con múltiples compartimentos",
        categoria: "Accesorios"
    },
    {
        id: 18,
        nombre: "Collar",
        precio: 12.99,
        cantidad: 9,
        descripcion: "Collar de plata con colgante",
        categoria: "Accesorios"
    },
    {
        id: 19,
        nombre: "Sudadera",
        precio: 29.99,
        cantidad: 8,
        descripcion: "Sudadera con capucha",
        categoria: "Ropa"
    },
    {
        id: 20,
        nombre: "Bicicleta",
        precio: 199.99,
        cantidad: 2,
        descripcion: "Bicicleta de montaña",
        categoria: "Deportes"
    },
    {
        id: 21,
        nombre: "Balón de fútbol",
        precio: 14.99,
        cantidad: 10,
        descripcion: "Balón de fútbol tamaño estándar",
        categoria: "Deportes"
    },
    {
        id: 22,
        nombre: "Guitarra",
        precio: 149.99,
        cantidad: 3,
        descripcion: "Guitarra acústica de madera",
        categoria: "Instrumentos musicales"
    },
    {
        id: 23,
        nombre: "Teclado",
        precio: 79.99,
        cantidad: 5,
        descripcion: "Teclado electrónico de 61 teclas",
        categoria: "Instrumentos musicales"
    },
    {
        id: 24,
        nombre: "Pelota de tenis",
        precio: 9.99,
        cantidad: 8,
        descripcion: "Pelota de tenis amarilla",
        categoria: "Deportes"
    },
    {
        id: 25,
        nombre: "Cámara",
        precio: 249.99,
        cantidad: 2,
        descripcion: "Cámara digital de alta resolución",
        categoria: "Electrónica"
    },
    {
        id: 26,
        nombre: "Altavoz",
        precio: 79.99,
        cantidad: 4,
        descripcion: "Altavoz portátil con conexión Bluetooth",
        categoria: "Electrónica"
    },
    {
        id: 27,
        nombre: "Smartphone",
        precio: 599.99,
        cantidad: 3,
        descripcion: "Smartphone de última generación",
        categoria: "Electrónica"
    },
    {
        id: 28,
        nombre: "Pendrive",
        precio: 24.99,
        cantidad: 6,
        descripcion: "Pendrive de 64GB",
        categoria: "Electrónica"
    },
    {
        id: 29,
        nombre: "Monitor",
        precio: 199.99,
        cantidad: 2,
        descripcion: "Monitor de 24 pulgadas",
        categoria: "Electrónica"
    },
    {
        id: 30,
        nombre: "Impresora",
        precio: 149.99,
        cantidad: 3,
        descripcion: "Impresora multifuncional",
        categoria: "Electrónica"
    }
];

const tbody = document.querySelector('table>tbody')
const form = document.querySelector('form')

function cargarLocalStorage(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr))
}

function obtenerDatosLocalStorage(key) {
    const arr = JSON.parse(localStorage.getItem(key))
    if (arr === null) return []
    return arr
}

function existeKeyLocalStorage(key) {
    let datos = localStorage.getItem(key)
    if (datos === null) return false
    return true
}

function cargarDatosEnHTML(arr, contenedor) {
    let datos = ''

    arr.forEach(producto => {
        datos += `<tr id="producto-${producto.id}">
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.cantidad}</td>
                </tr>`
    })

    contenedor.innerHTML = datos
}


function cargarProducto(producto) {
    const messagesWarning = document.querySelectorAll('.warning')
    try {
        if (!producto.nombre) {
            const inputNombre = Array.from(messagesWarning).find(input => input.id === 'prod-nombre')
            inputNombre.classList.remove('d-none')
            throw new Error('Debe colocarse el nombre')
        }
        if (!producto.precio) {
            const inputPrecio = Array.from(messagesWarning).find(input => input.id === 'prod-precio')
            inputPrecio.classList.remove('d-none')
            throw new Error('Debe colocarse el nombre')
        }
        if (!producto.cantidad) {
            const inputCantidad = Array.from(messagesWarning).find(input => input.id === 'prod-cantidad')
            inputCantidad.classList.remove('d-none')
            throw new Error('Debe colocarse el nombre')
        }

        const arr = JSON.parse(localStorage.getItem('productos'))
        producto.id = arr.length + 1
        arr.push(producto)
        // localStorage.setItem('productos', JSON.stringify(arr))
        cargarDatosEnHTML(arr, tbody)
    } catch (error) {
        console.error(error)
    }


}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const producto = Object.fromEntries(new FormData(event.target))
    cargarProducto(producto)
})


function main() {
    if (!existeKeyLocalStorage('productos')) {
        cargarLocalStorage('productos', productos)
    }
    const data = obtenerDatosLocalStorage('productos')
    cargarDatosEnHTML(data, tbody)
}
main()


// setTimeout
// const contenedorAsync = document.querySelector('.contenidoAsync')
// contenedorAsync.innerHTML = '<h3>Cargando...</h3>'
// setTimeout(() => {
//     contenedorAsync.innerHTML = '<h3>Contenido cargado</h3>'
// }, 3000)