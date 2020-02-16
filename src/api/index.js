export const apiGet = (url) => fetch(url).then(response => {
    const datos = response.json()
    return datos
});



export function apiPut(url, id, obj) {
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
}

export function apiPost(url, customer) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).
        then(response => response.json())
        .then(dataJson => {
            console.log("Data: ");
            console.log(dataJson);
            if (dataJson.error) {
                console.log(dataJson.error);
            }
        })
}

export function apiDelete(url, id) {
    debugger
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
}
       