// Задание 1

let user = {
    city: 'Gazalkent',
    country: 'Tashkent, Uzbekistan',
    population: 34000000,
    stadium: true
};
console.log(user);

// Задание 2

const heigth = 40;
const width = 70;

const square = heigth + width;

console.log('Площадь прямоуголника' + ' ' + square + 'sm');

// Задание 3

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;

const speedMachine = speedOfFirst + speedOfSecond;
console.log('Скорость автомобилей (общее)' + ' ' + speedMachine);

const cityDistance = speedMachine * time;
console.log('Расстояние между городами' + ' ' + cityDistance);

//Задание 4
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
}else if (randomNumber > 50){
    console.log("randomNumber больше 50");
}else{
    console.log("randomNumber больше 20, и меньше 50");
}

//Задание 5
switch (randomNumber) { 
    case randomNumber < 20 :
        console.log("randomNumber меньше 20");
        break;
    case randomNumber > 50 :
        console.log("randomNumber больше 50");
        break;
    default :
        console.log("randomNumber больше 20, и меньше 50");
};