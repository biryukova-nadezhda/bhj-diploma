/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
    static URL = "/user";

    /**
     * Устанавливает текущего пользователя в
     * локальном хранилище.
     * */
    static setCurrent(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    /**
     * Удаляет информацию об авторизованном
     * пользователе из локального хранилища.
     * */
    static unsetCurrent() {
        localStorage.removeItem("user");
    }

    /**
     * Возвращает текущего авторизованного пользователя
     * из локального хранилища
     * */
    static current() {
        try {
            return JSON.parse(localStorage.getItem("user"));
        } catch {
            return
        }
    }

    /**
     * Получает информацию о текущем
     * авторизованном пользователе.
     * */
    static fetch(callback) {
        let obj = {
            method: "GET",
            url: this.URL + "/current",
            callback: (error, response) => {
                if (response && response.user) {
                    this.setCurrent(response.user);
                }
                callback(error, response);
            }
        }
        createRequest(obj);
    }

    /**
     * Производит попытку авторизации.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static login(data, callback) {
        createRequest({
            method: 'POST',
            url: this.URL + '/login',
            data,
            callback: (error, response) => {
                if (response && response.user) {
                    this.setCurrent(response.user);
                }
                callback(error, response);
            }
        });
    }

    /**
     * Производит попытку регистрации пользователя.
     * После успешной авторизации необходимо
     * сохранить пользователя через метод
     * User.setCurrent.
     * */
    static register(data, callback) {
        createRequest({
            method: 'POST',
            url: this.URL + '/register',
            data,
            callback: (error, response) => {
                if (response && response.user) {
                    this.setCurrent(response.user);
                }
                callback(error, response);
            }
        });
    }

    /**
     * Производит выход из приложения. После успешного
     * выхода необходимо вызвать метод User.unsetCurrent
     * */
    static logout(callback) {
        createRequest({
            method: 'POST',
            url: this.URL + '/logout',
            callback: (error, response) => {
                if (response && response.success) {
                    this.unsetCurrent();
                }
                callback(error, response);
            }
        });
    }
}