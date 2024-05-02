
// function ingresarStringYMostrar(mensaje){

//     let str = prompt(mensaje)
//     console.log(str)
// }

// ingresarStringYMostrar('Ingresa tu nombre')

// ingresarStringYMostrar('ingresá tur apellido')


function promptLog(arr) {
    let inputs = arr.map(mensaje => {
        let str = prompt(mensaje)
        return str
    });
    console.log(inputs)
}

const mensajes = ['ingresá nombre', 'ingresá apellido', 'ingresá edad', 'ingresá email']

// promptLog(mensajes)


const obtenerSuDoble = (a) => a + a
// console.log(obtenerSuDoble(5))

// function obtenerSuDoble(a){
//     return a + a
// }

const obtenerSuTriple = (a) => a + a + a

const numeros = [1, 2, 3, 4, 5]

const dobles = numeros.map(obtenerSuTriple)
// console.log(dobles)

// for (let i = 0 )
const persona = {
    nombre: "Juan",
    edad: 32,
    ciudad: "Madrid",
    profesion: "Ingeniero de Software",
    hobbies: ["leer", "correr", "viajar"],
    estadoCivil: "soltero"
};


function crearPrompt(objeto) {
    let mensaje = '';
    for (clave in objeto) {
        mensaje += `${clave}: ${objeto[clave]}\n`
    }
    return mensaje
}

const menuBiblioteca = {
    1: "Buscar libro",
    2: "Renovar libro",
    3: "Ver libros prestados",
    4: "Historial de préstamos",
    5: "Sugerir nueva adquisición",
    6: "Eventos y actividades",
    7: "Salir"
}

const menuSupermercado = {
    1: "Comprar productos",
    2: "Lista de compras",
    3: "Ofertas y promociones",
    4: "Compras recientes",
    5: "Productos favoritos",
    6: "Ubicación de tiendas",
    7: "Salir"
};

const menuTallerAutos = {
    1: "Agendar cita",
    2: "Historial de servicios",
    3: "Cotizar reparación",
    4: "Comprar repuestos",
    5: "Servicios adicionales",
    6: "Preguntas frecuentes",
    7: "Salir",
    8: "Otros servicios"
};

let msj = crearPrompt(menuTallerAutos)
prompt(msj)