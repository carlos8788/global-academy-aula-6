const URL = 'https://665e0fe1e88051d604094a93.mockapi.io/users'

export async function getData() {
    const response = await fetch(URL)
    const data = await response.json();

    return data
}

export async function createData(body) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();

    return data
}

export async function deleteData(id){
    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json();

    return data
}

export async function editData(id, data) {
    const response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();

    return result
}