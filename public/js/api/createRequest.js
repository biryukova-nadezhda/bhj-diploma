const { options } = require("nodemon/lib/config");

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    if (options.method === "GET") {
        let adress = `${options.url}?mail=${options.data.mail}&password=${options.data.password}`;

        try {
            xhr.open("GET", adress);
            xhr.send();
            check(xhr, options);

        } catch (e) {
            options.callback(e, xhr.response);
        }

    } else {
        const formData = new FormData();
        formData.append("mail", `${options.data.mail}`);
        formData.append("password", `${options.data.password}`);

        xhr.open(`${options.method}`, `${options.url}`);
        xhr.send(formData);

        check(xhr, options);
    }
};

function check(xhr, options) {
    if (xhr.readyState === xhr.DONE) {
        options.callback(null, xhr.response);
    }
}