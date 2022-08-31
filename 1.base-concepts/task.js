"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  // Формула дискриминанта

  let D = Math.pow(b, 2) - (4 * a * c);

  // При дискриминанте >0 вычисляем х1 и х2

  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a)
    arr.push(x1, x2)

   // При дискриминате =0 вычисляем х

  } else if (D===0) {
    let x = - b / (2 * a)
    arr.push(x)

   // При дискриминанте 0< корней нет
   
  } else if (D < 0) {
    arr.push()
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
