'use strict';

let country = prompt('Введите Вашу страну');
let deliveryPrice;

if (country === null) {
  alert('Отменено пользователем!');
} else {
  switch (country.toLowerCase()) {
    case 'китай':
      deliveryPrice = 100;
      break;

    case 'чили':
      deliveryPrice = 250;
      break;

    case 'австралия':
      deliveryPrice = 170;
      break;

    case 'индия':
      deliveryPrice = 80;
      break;

    case 'ямайка':
      deliveryPrice = 120;
      break;

    default:
      alert('В Вашей стране доставка не доступна');
  }
  if (deliveryPrice > 0) {
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
  }
}
