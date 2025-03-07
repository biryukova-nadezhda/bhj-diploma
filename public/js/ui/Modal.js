/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
    /**
     * Устанавливает текущий элемент в свойство element
     * Регистрирует обработчики событий с помощью Modal.registerEvents()
     * Если переданный элемент не существует,
     * необходимо выкинуть ошибку.
     * */
    constructor(element) {
        if (!element) {
            return console.error("Элемент не задан");
        } else {
            this.element = element;
            this.registerEvents();
        }
    }

    /**
     * При нажатии на элемент с data-dismiss="modal"
     * должен закрыть текущее окно
     * (с помощью метода Modal.onClose)
     * */
    registerEvents() {
        const closeButtons = this.element.querySelectorAll(
            '[data-dismiss="modal"]'
        );

        for (let button of closeButtons) {
            button.addEventListener('click', (event) => {
                this.onClose(event);
            });
        }
        /*
        let arrayClose = Array.from(this.element.querySelectorAll('[data-dismiss="modal"]'));
        arrayClose.forEach((item) => {
            item.addEventListener("click", (event) => {
                event.preventDefault();
                this.onClose(this.element);
            });
        })*/
    }

    /**
     * Срабатывает после нажатия на элементы, закрывающие окно.
     * Закрывает текущее окно (Modal.close())
     * */
    onClose(event) {
        event.preventDefault();
        this.close();
    }

    /**
     * Открывает окно: устанавливает CSS-свойство display
     * со значением «block»
     * */
    open() {
        this.element.style.display = "block";
    }

    /**
     * Закрывает окно: удаляет CSS-свойство display
     * */
    close() {
        this.element.style.display = "none";
    }
}