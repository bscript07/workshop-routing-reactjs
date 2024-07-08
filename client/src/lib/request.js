const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-type': 'application/json' 
        };
    }

    return options;
}

const request = async (method, url, data) => {
    const response = await fetch(url, {
        method,
        ...buildOptions(data),
    });

    const result = await response.json();
    return result;
}

export const get = (url) => request('GET', url);
export const post = (url, data) => request('POST', url, data);
export const put = (url, data) => request('PUT', url, data);
export const patch = (url, data) => request('PATCH', url, data);
export const del = (url) => request('DELETE', url);
