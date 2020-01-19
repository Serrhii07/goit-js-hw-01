'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let droidQuantity = prompt('Какое количество дроидов Вы хотите купить?');

if (droidQuantity === null) {
  console.log('Отменено пользователем!');
} else {
  droidQuantity = Number(droidQuantity);
  totalPrice = pricePerDroid * droidQuantity;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${droidQuantity} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}
