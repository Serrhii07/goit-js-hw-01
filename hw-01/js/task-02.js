'use strict';

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с Вами свяжется менеджер');
}

// ВАРИАНТ С ТЕРНАРНЫМ ОПЕРАТОРОМ

// const total = 100;
// const ordered = 50;

// const result =
//   ordered > total
//     ? 'На складе недостаточно товаров!'
//     : 'Заказ оформлен, с Вами свяжется менеджер';

// console.log(result);
