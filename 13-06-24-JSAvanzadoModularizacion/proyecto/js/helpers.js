export function formatFecha(dato) {
    let fecha = new Date(dato)
    fecha = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    return fecha
}


export function background(contador){
    let background = (contador % 2 === 0) ? 'bg-blueligth' : ''
    return background
}