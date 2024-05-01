//stringify

const persona = {
    nombre: 'Lalo',
    apellido: 'Silva'
}

console.log(typeof persona)
console.log(persona)

let stringPersona = JSON.stringify(persona)


console.log(typeof(stringPersona))
console.log(stringPersona)

//parse

let stringAuto = '{"marca": "fiat", "modelo":"argo", "anio": 2021}'
console.log(stringAuto)

const auto = JSON.parse(stringAuto)
console.log(auto)
console.log(auto.marca)

//LocalStorage

localStorage.setItem('nombre', stringPersona)
localStorage.setItem('auto', stringAuto)

let storagePersona = localStorage.getItem('nombre')
console.log(storagePersona)

// localStorage.removeItem('nombre')
localStorage.clear()