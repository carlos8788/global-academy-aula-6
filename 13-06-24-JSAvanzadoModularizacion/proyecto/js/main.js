import { createData, deleteData, getData } from "./api.js";
import { background, formatFecha } from "./helpers.js";

const container = document.querySelector('tbody')
const formulario = document.querySelector('form')

function cargarDatos() {
    getData()
        .then(data => {
            let datos = ''
            let contador = 0
            data.forEach(user => {
                let fecha = formatFecha(user.fecha)
                let bg = background(contador)
                datos += `
                    <tr id="row-${user.id}" class="${bg}">
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.curso}</td>
                        <td>${fecha}</td>
                        <td>
                            <button class="buttons btn-edit" data-id="${user.id}" id="edit-${user.id}">EDIT</button>
                            <button class="buttons btn-delete" data-id="${user.id}" id="delete-${user.id}">DELETE</button>
                        </td>
                    </tr>
                `
                contador++;
            });
            if (container) {
                container.innerHTML = datos
            }
        })
        .then(() => {
            const btnsDelete = document.querySelectorAll('.btn-delete')
            const btnsEdit = document.querySelectorAll('.btn-edit')
            btnsDelete.forEach(btn => {
                const id = btn.getAttribute('data-id')
                deleteDato(id)
            })
            btnsEdit.forEach(btn => {
                const id = btn.getAttribute('data-id')
                editarDato(id)
            })

        }
        )
        .catch(err => console.error(err));
}

function crearDatos() {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        data.fecha = Date.now()
        console.log(data)
        createData(data)
            .then(cargarDatos)
            .then(() => this.reset())
            .catch(err => console.error(err))

    })
}

function deleteDato(id) {
    const btn = document.querySelector(`#delete-${id}`)
    const row = document.querySelector(`#row-${id}`)
    btn.addEventListener('click', function () {
        row.remove()
        deleteData(id)
            .then(() => console.log('Elemento eliminado'))
            .catch(error => console.log(error))
    })
}

function editarDato(id) {
    const btn = document.querySelector(`#edit-${id}`)
    btn.addEventListener('click', function () {
        window.location.href = `edit.html?id=${id}` 
    })
}

function main() {
    crearDatos()
    cargarDatos()
}

main()


test.map(x => {
    return {
        nombre: x.nombre1
    }
})