const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    guardarDatos(data)
    formulario.reset()
})

function guardarDatos(data){
    datos.push(data)
    
    localStorage.setItem('autos', JSON.stringify(datos))
}