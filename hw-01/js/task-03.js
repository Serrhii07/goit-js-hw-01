'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let login = prompt('Введите пароль');

if (login === null) {
  message = 'Отменено пользователем!';
} else if (login === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещён, неверный пароль!';
}

alert(message);
