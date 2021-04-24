// 1.
var array = ["Привет,", "мир", "!"];

var helloWorld = "";
for (let i=0; i < array.length; i++) {
    helloWorld += array[i];
}

console.log(helloWorld);

// 2.
var language = prompt("Введите язык (ru/en): ");
var arrayRu = ["понедiлок", "вiвторок", "середа", "четверг", "п'ятниця", "субота", "недiля"];
var arrayEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var array = [];

if (language == "ru") {
    array = array.concat(arrayRu);
} else if (language == "en") {
    array = array.concat(arrayEn);
}

console.log(String(array));

array = [];
switch (language) {
    case "ru":
        array = array.concat(arrayRu);
        break;
    case "en":
        array = array.concat(arrayEn);
        break;
}

console.log(String(array));

var arr = [
    ['arrayRu', 'arrayEn'],
]

      (language == "ru") ? console.log(arr[0][0]): 
      (language == "en") ? console.log(arr[0][1]);
      

// 3.

var floor = +prompt("Введите количество этажей в доме");
var entrance = +prompt("Введите количество подъездов в доме");
var numberOfApartments = +prompt("Введите количество квартир на этаже");
var apartment = +prompt("Введите номер квартиры");
 
var findApartment = function(){
    var apartmentsInEntrance = floor * numberOfApartments;
    
    var findEntrance = Math.floor(apartment / apartmentsInEntrance + 1);
    
    var findFloor;

    if (apartment > apartmentsInEntrance) {
        findFloor = Math.floor((apartment / numberOfApartments) / floor + 1);
    } else if (apartment <= apartmentsInEntrance && apartment > numberOfApartments) {
        findFloor = Math.floor(apartment / numberOfApartments + 1);
    } else if (apartment <= apartmentsInEntrance && apartment <= numberOfApartments) {
        findFloor = Math.floor(apartment / numberOfApartments);
    }
    

    if(apartment > 0 && findFloor !== "NaN" && findFloor > 0 && findEntrance !== "NaN" && findEntrance > 0) {
        console.log(`Квартира №"${apartment} находится на ${findFloor} этаже ${findEntrance} подъезда`);
    } else {
        console.log("Вы ввели недопустимое значение");
    }
};

findApartment();
