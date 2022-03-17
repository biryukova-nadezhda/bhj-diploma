/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {

    static URL = "";
    /**
     * Запрашивает с сервера список данных.
     * Это могут быть счета или доходы/расходы
     * (в зависимости от того, что наследуется от Entity)
     * */
    static list(data, callback) {
        let obj = {
            method: "GET",
            url: this.URL,
            data: data,
            callback: callback
        }

        createRequest(obj);
    }

    /**
     * Создаёт счёт или доход/расход с помощью запроса
     * на сервер. (в зависимости от того,
     * что наследуется от Entity)
     * */
    static create(data, callback) {
        let obj = {
            method: "PUT",
            url: this.URL,
            data: data,
            callback: callback
        }

        createRequest(obj);
    }

    /**
     * Удаляет информацию о счёте или доходе/расходе
     * (в зависимости от того, что наследуется от Entity)
     * */
    static remove(data, callback) {
        //Формируем объект для осуществления запроса
        let obj = {
            method: "DELETE",
            url: this.URL,
            data: data,
            callback: callback
        }

        createRequest(obj);
    }
}