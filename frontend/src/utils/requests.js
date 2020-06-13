const postRequest = (url, params) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    }).then(response => {
        console.log(response);
        return response.json();
    }).catch(error => {
        console.log(error);
    });
}

const getRequest = (url) => {
    return fetch(url, {}).then(response => {
        return response.json();
    });
};

export {getRequest, postRequest};