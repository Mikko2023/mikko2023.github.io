//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях. 

'потоп'
'мадам'
'комок'

'Уж истово вот сижу'

37573 - true
23442 - false 


//Решение ----------------------

let str = "Уж истово вот сижу";
let strReverse = str.split("").reverse().join("");
if (str === strReverse) {
    console.log("true");
} else {
    console.log("false");
}