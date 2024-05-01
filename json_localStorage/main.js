const arrayFrutas = ['frutilla', 'mango', 'naranja']

//JSON.stringify()
const jsonFrutas = JSON.stringify(arrayFrutas)

// console.log(arrayFrutas.length)

// console.log(jsonFrutas.length)


//JSON.parse()

const jsonObj = '{"nombre":"Juan Pérez","edad":30,"email":"juan.perez@example.com"}'

// console.log(jsonObj)

const obj = JSON.parse(jsonObj)
// console.log(obj)

// localStorage.setItem('nombre', 'Luis')
// localStorage.setItem('nombres', 'Carlos')
// localStorage.setItem('apellido', 'Perez')

// console.log(localStorage.getItem('nombre'))
// localStorage.removeItem('apellido')

const usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    email: "juan.perez@example.com"
}

localStorage.setItem('usuario', JSON.stringify(usuario))

console.log(localStorage.getItem('usuario'))

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', anio: 2020, color: 'Rojo', precio: 25000 },
    { marca: 'Honda', modelo: 'Civic', anio: 2018, color: 'Azul', precio: 20000 },
    { marca: 'Ford', modelo: 'Mustang', anio: 2022, color: 'Negro', precio: 35000 },
    { marca: 'Chevrolet', modelo: 'Camaro', anio: 2019, color: 'Amarillo', precio: 30000 },
    { marca: 'Nissan', modelo: 'Altima', anio: 2021, color: 'Blanco', precio: 23000 },
    { marca: 'Volkswagen', modelo: 'Jetta', anio: 2017, color: 'Gris', precio: 18000 },
    { marca: 'BMW', modelo: 'Serie 3', anio: 2020, color: 'Azul Oscuro', precio: 40000 },
    { marca: 'Mercedes-Benz', modelo: 'Clase C', anio: 2019, color: 'Plata', precio: 45000 },
    { marca: 'Hyundai', modelo: 'Elantra', anio: 2021, color: 'Rojo', precio: 22000 },
    { marca: 'Kia', modelo: 'Sportage', anio: 2020, color: 'Blanco', precio: 27000 },
    { marca: 'Subaru', modelo: 'Outback', anio: 2018, color: 'Azul', precio: 28000 },
    { marca: 'Mazda', modelo: 'CX-5', anio: 2019, color: 'Gris', precio: 25000 },
    { marca: 'Jeep', modelo: 'Wrangler', anio: 2022, color: 'Verde', precio: 33000 },
    { marca: 'Lexus', modelo: 'RX', anio: 2020, color: 'Negro', precio: 48000 },
    { marca: 'Audi', modelo: 'A4', anio: 2021, color: 'Blanco', precio: 42000 },
    { marca: 'Volvo', modelo: 'XC60', anio: 2019, color: 'Gris Oscuro', precio: 40000 },
    { marca: 'Infiniti', modelo: 'Q50', anio: 2020, color: 'Rojo', precio: 38000 },
    { marca: 'Acura', modelo: 'TLX', anio: 2021, color: 'Azul', precio: 35000 },
    { marca: 'Dodge', modelo: 'Charger', anio: 2018, color: 'Negro', precio: 30000 },
    { marca: 'Buick', modelo: 'Encore', anio: 2020, color: 'Blanco', precio: 25000 }
];

localStorage.setItem('autos', JSON.stringify(autos))