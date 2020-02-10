export const apiGet = (url) => fetch(url).then(response => {
    const datos = response.json()
    return datos
});
