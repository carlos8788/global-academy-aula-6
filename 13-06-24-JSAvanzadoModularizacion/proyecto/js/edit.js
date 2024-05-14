import { editData } from "./api.js"

const editForm = document.querySelector('.form-edit')
const btnCancel = document.querySelector('#cancel')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')



editForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    data.fecha = Date.now()
    editData(id, data)
        .then(() => window.location.href = 'index.html')
        .catch(error => console.log(error))

})

btnCancel.addEventListener('click', function () {
    window.location.href = 'index.html'
})