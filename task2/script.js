"use strict";
// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];
var result = arr.sort(function (x, y) {
    return (x - y);
});
console.log(result);
//...
// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
//var text = "The quick brown fox jumps over the lazy dog";
//// ...
//function over4letters(text) {
//    var words = text.splice(" ");
//    for (var i = 0; i < text.length; i += 1) {
//        if (words[i].length >= 4) {}
//    }
//    return words;
//}
//console.log(over4letters(text));
//// задача 3 (5т.)
//// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`
//// ...
//window.setTimeout("every1second", 1000);
//
//function every1second() {
//    document.getElementById("container").style.appendChild("<p>repetition is fun</p>");
//}
//// задача 4 (6т.)
//// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)
//// ...
//window.setInterval("every2sec", 2000);
//
//function every2second() {
//    document.getElementById("images li img").classList.add()
//};
////// задача 5 (6т.)
//// Напишете функция, която да сортира следния списък от обекти по полето `price`:
var items = [
    {
        id: 1
        , title: "Item 1"
        , price: 4.3
  }
    , {
        id: 2
        , title: "Item 2"
        , price: 2.0
  }
    , {
        id: 3
        , title: "Item 3"
        , price: 6.5
  }
    , {
        id: 4
        , title: "Item 4"
        , price: 1.5
  }
];
// ...
function getPrice(items) {
    var result = " ";
    var z;
    for (var i = 0; i < items.length; i += 1) {
        result += items[i].price;
    }
    z = result.sort(function (x, y) {
        return (x.price - y.price);
    });
    return z;
}
console.log(getPrice(items));