console.log('Estructuras de control')



// let input = prompt('Ingrese su contrasenia')

// if(input === '123456'){
//     alert('La contrasenia es correcta ✅')
// }
// else{
//     alert('La contrasenia es incorrecta ❌')
// }


// let valor = 3 < 5
// let valor2 = 3 === '3'

// if (valor) {
//     console.log('Bloque de código if')
// } else if (valor2) {
//     console.log('Bloque de código else if')
// }
// else {
//     console.log('bloque de código else')
// }

// let dia = prompt('Ingrese un número del 1 al 7')

// dia = Number(dia)

// switch (dia) {
//     case 1:
//         console.log('Lunes')
//         break;
//     case 2:
//         console.log('Martes')
//         break;
//     case 3:
//         console.log('Miercoles')
//         break;
//     case 4:
//         console.log('Jueves')
//         break;
//     case 5:
//         console.log('Viernes')
//         break;
//     case 6:
//         console.log('Sabado')
//         break;
//     case 7:
//         console.log('Domingo')
//         break;
//     default:
//         console.log('Número no válido')
//         break;
// }

// for (let i = 0; i<10; i++){
//     console.log(i)
// }

const criaturasFantasticas = [
    {
        nombre: "Dragón de la Tormenta",
        descripcion: "Un ser colosal con escamas iridiscentes y alas que generan tormentas eléctricas a su paso.",
        habilidades: ["Vuelo", "Respiración de rayo", "Control del clima"]
    },
    {
        nombre: "Hada del Bosque Susurrante",
        descripcion: "Una criatura diminuta con alas de mariposa y una voz que encanta a las plantas y animales.",
        habilidades: ["Comunicación con la naturaleza", "Curación", "Ilusiones"]
    },
    {
        nombre: "Unicornio Lunar",
        descripcion: "Un majestuoso caballo blanco con un cuerno que brilla con la luz de la luna.",
        habilidades: ["Purificación", "Viaje astral", "Telepatía"]
    },
    {
        nombre: "Kraken de las Profundidades",
        descripcion: "Un monstruo marino gigante con tentáculos que pueden hundir barcos enteros.",
        habilidades: ["Fuerza descomunal", "Control del agua", "Tinta venenosa"]
    },
    {
        nombre: "Fénix de Cenizas",
        descripcion: "Un ave legendaria que renace de sus cenizas con un canto que inspira esperanza.",
        habilidades: ["Renacimiento", "Sanación", "Control del fuego"]
    },
    {
        nombre: "Golem de Piedra",
        descripcion: "Un ser de piedra gigante con una fuerza inconmensurable y un corazón noble.",
        habilidades: ["Fuerza descomunal", "Resistencia extrema", "Lealtad inquebrantable"]
    },
    {
        nombre: "Súcubo Seductora",
        descripcion: "Una criatura de belleza sobrenatural que puede manipular los deseos y emociones.",
        habilidades: ["Ilusiones", "Encanto", "Seducción"]
    },
    {
        nombre: "Hombre Lobo Lunar",
        descripcion: "Un humano que se transforma en un lobo feroz bajo la luz de la luna llena.",
        habilidades: ["Fuerza y velocidad sobrehumanas", "Sentidos agudizados", "Cambio de forma"]
    },
    {
        nombre: "Fantasma Errante",
        descripcion: "Un espíritu inquieto que vaga por el mundo buscando paz.",
        habilidades: ["Intangibilidad", "Telequinesis", "Manipulación del miedo"]
    },
    {
        nombre: "Elfo de las Estrellas",
        descripcion: "Un ser de gran longevidad y sabiduría proveniente de las estrellas.",
        habilidades: ["Magia poderosa", "Conocimiento ancestral", "Conexión con el cosmos"]
    }
];

// for (const iterador of criaturasFantasticas) {
//     console.log(iterador.nombre)
// }

const miObjeto = {
    estrella: "✨",
    poema: "La luna es un espejo,\nreflejando la vida,\nsus misterios y anhelos,\nen una noche tendida.",
    libroFavorito: "El Principito",
    melodia: "🎵 Do Re Mi Fa Sol La Si 🎶",
    sueño: "Volar sobre las nubes",
    colores: ["rojo", "naranja", "amarillo", "verde", "azul", "índigo", "violeta"],
    amigoImaginario: {
        nombre: "Puffles",
        edad: 7,
        hobbie: "Contar historias"
    },
    recetaSecreto: {
        ingredientes: ["amor", "risas", "sueños"],
        instrucciones: "Mezclar bien y disfrutar."
    },
    aforismo: "La imaginación es la mejor forma de viajar."
};

// for (const key in miObjeto) {
//     console.log(key)
//     console.log(miObjeto[key])
// }

// let numero = Number(prompt('Ingrese un numero'))

// if (isNaN(numero)) {
//     alert('No ingresó un número válido')
// }
// else {
//     while (numero > 0) {
//         console.log(numero)
//         numero--;
//     }
// }


// let condition;
// do {
//     condition = prompt('Ingrese "stop" para finalizar')
//     console.log(condition)
// } while (condition !== 'stop');

// alert('Finalizó el programa')

const usuarios = [
    {
        username: "usuario1",
        contrasenia: "clave123"
    },
    {
        username: "johndoe",
        contrasenia: "segura#123"
    },
    {
        username: "mariagomez",
        contrasenia: "password456"
    },
    {
        username: "superadmin",
        contrasenia: "admin123$$$"
    },
    {
        username: "alejandro7",
        contrasenia: "miclaveSecreta"
    }
];

for (const user of usuarios) {
    console.log(user.contrasenia)
}

let nombreDeUsuario;
let password;
let condition = true;
let contador = 1;

do {
    const nombreDeUsuario = prompt('Ingrese el usuario');

    const usuarioEncontrado = usuarios.find(user => user.username === nombreDeUsuario);

    if (usuarioEncontrado) {
        const password = prompt('Ingrese la contraseña');

        if (password === usuarioEncontrado.contraseña) {
            alert('Contraseña correcta, ingresó al sistema');
            condition = false;
        } else {
            alert('Contraseña incorrecta, intente de nuevo');
            contador++;
        }
    } else {
        alert('Usuario incorrecto, intente de nuevo');
        contador++;
    }

    if (contador > 3) {
        alert('Demasiados intentos fallidos, finalizó el programa');
        condition = false;
    }
} while (condition);