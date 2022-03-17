/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
    static URL = "/account";
    /**
     * Получает информацию о счёте
     * */
    static get(id = '', callback) {
        let obj = {
            method: "GET",
            url: `${this.URL}/${id}`,
            data: null,
            callback: callback
        }

        createRequest(obj);
    }
}