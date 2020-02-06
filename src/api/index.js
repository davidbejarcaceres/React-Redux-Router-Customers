
var customers = [
    {
        "id": "30000001",
        "dni": "30000001",
        "name": "FACUNDO 2",
        "age": 30
    },
    {
        "id": "500000",
        "dni": "500000",
        "name": "CARLOS SANCHES",
        "age": 40
    },
    {
        "dni": "6868686",
        "name": "Nuevo cliente",
        "age": 10,
        "id": "XSCfaW5"
    },
    {
        "name": "NUEVO CLIENTE 15851",
        "dni": "99999",
        "age": 11,
        "id": "kxmVQVd"
    }
]

export const apiGet = (url) => () => fetch(url).then(v => customers);

export const apiPut = (url, id, obj) => () =>
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });

export const apiPost = (url, obj) => () =>
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });

export const apiDelete = (url, id) => () =>
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return id;
        });    