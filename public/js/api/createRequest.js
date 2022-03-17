//const { options } = require("nodemon/lib/config");

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    let { url, method, data, callback } = options;

    if (method === "GET") {
        url += "?";

        /*for (let key of Object.keys(data)) {
            url += `${key}=${data.key}&`;
        }*/

        for (let key in data) {
            url += `${key}=${data[key]}&`;
        }

    } else {
        const formData = new FormData();

        /*for (let key of Object.keys(data)) {
            formData.append(key, data.key);
        }*/

        for (let key in data) {
            formData.append(key, data[key]);
        }
    }

    try {
        xhr.open(method, url);

        if (method === "GET") {
            xhr.send();
        } else {
            xhr.send(formData);
        }
    } catch (e) {
        callback(e);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            callback(null, xhr.response);
        }
    }

}