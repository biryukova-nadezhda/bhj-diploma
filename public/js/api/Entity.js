/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
    /**
     * Запрашивает с сервера список данных.
     * Это могут быть счета или доходы/расходы
     * (в зависимости от того, что наследуется от Entity)
     * */
    static URL() {
        return "";
    }

    static list(data, callback) {
        //Формируем объект для осуществления запроса
        let obj = {
            url: "",
            data: data,
            method: "GET",
            callback: callback
        }

        return createRequest(obj);
    }

    /**
     * Создаёт счёт или доход/расход с помощью запроса
     * на сервер. (в зависимости от того,
     * что наследуется от Entity)
     * */
    static create(data, callback) {
        //Формируем объект для осуществления запроса
        let obj = {
            url: "",
            data: data,
            method: "PUT",
            callback: callback
        }

        return createRequest(obj);
    }

    /**
     * Удаляет информацию о счёте или доходе/расходе
     * (в зависимости от того, что наследуется от Entity)
     * */
    static remove(data, callback) {
        //Формируем объект для осуществления запроса
        let obj = {
            url: "",
            data: data,
            method: "DELETE",
            callback: callback
        }

        return createRequest(obj);
    }
}