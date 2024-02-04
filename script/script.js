//Создайте HTML-страницу с кнопкой. При клике на кнопку измените текст элемента с id "target" на "Привет, мир!" с использованием JavaScript и DOM.
const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Изменить текст';
        buttonElement.addEventListener('click', changeText);

        document.body.append(buttonElement);

        function changeText() {
            const targetElement = document.getElementById('target');
            targetElement.textContent = "Привет, мир!";
        }
//Создайте HTML-страницу с формой (input и button). При отправке формы выведите в консоль введенное значение из input с использованием JavaScript и DOM.
const formElement = document.getElementById('secondTask');
    formElement.addEventListener('submit', function(event) {
            event.preventDefault();
            const inputValue = document.getElementById('inputValue').value;
            console.log('Введенное значение:', inputValue);
        });

//Создайте HTML-страницу, в которой присутсвует кнопка. При нажатии на нее текст кнопки меняется на случайное число от 5 до 15.
        function changeButtonText() {
            
            const buttonElement = document.getElementById('myButton');
            const randomValue = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            buttonElement.textContent = randomValue;
        }