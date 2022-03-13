/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    /**
     * Получает информацию о счёте
     * */

    static URL() {
        return "/account";
    }

    static get(id = '', callback) {
        //Формируем объект для осуществления запроса
        let obj = {
            url: "",
            data: {
                id: id,
            },
            method: "GET",
            callback: callback
        }

        return createRequest(obj);
    }
}