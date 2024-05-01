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

// Obtener elementos o contenedores
const containerCars = document.querySelector('.cars')
const titulo = document.querySelector('h1')

// containerCars.innerText = '<h2>hola desde JS</h2>'
// titulo.innerHTML = 'Otra cosa'

// MODIFICACION o CREACIÓN DE ELEMENTOS

const parrafo = document.createElement('p')
parrafo.textContent = 'Soy un párrafo'
parrafo.classList.add('green')
// containerCars.append(parrafo)


// EVENTOS
const select = document.querySelector('#autos')

autos.forEach(auto => {
    const opt = document.createElement('option')
    opt.textContent = `${auto.marca} ${auto.modelo}`
    opt.setAttribute('value', auto.modelo)
    select.append(opt)
})


function crearCard(datos) {
    return `<div>
                <h3>${datos.marca} ${datos.modelo}</h3>
                <h3>color: ${datos.color}</h3>
                <h3>año: ${datos.anio}</h3>
                <h3>precio: <span>$${datos.precio}</span></h3>
            </div>
            
            `
}



const formulario = document.querySelector('form')

select.addEventListener('change', function(){
    containerCars.innerHTML = ''
})

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const datos = Object.fromEntries(new FormData(event.target))
    const auto = autos.find(car => car.modelo === datos.modelo)

    const card = crearCard(auto)
    containerCars.innerHTML = card
})

const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    const cardAuto = document.querySelector('.cars>div')

    if(cardAuto.classList.contains('estilos')){
        this.innerText = 'Dar Estilos'
    }else{
        this.innerText = 'Quitar estilos'
    }
    cardAuto.classList.toggle('estilos')
})