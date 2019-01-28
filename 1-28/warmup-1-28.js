'use strict';
// Array Stuff;
let testArr = [1,4,55,3,66,23,9];

function forLoop(arr) {
  for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
  }
};
forLoop(testArr);

function whileLoop(arr) {
  let i = 0;
  while(arr[i]) {
    console.log(`this is the loop ${arr[i]}`);
    i++;
  };
};
whileLoop(testArr);

let mapArr = testArr.map(function(val,index,arr){
  return val * 2;
});

console.log(mapArr);
function checkNum(num){
  return num >= 15;
}

function filterArr(){
  let filtered = testArr.filter(checkNum);
  console.log(filtered);
};
filterArr();
 

function reduceStuff(arr){
  let reduced = arr.reduce(function(total, cur, index,arr){
    total += cur;
    return total;
  });
  console.log(reduced);
}

reduceStuff(testArr);

// Objects
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};

newPeople = ['Odie', ...people, 'Garfield'];

console.log(newPeople);

newStuff = stuff;
newStuff.cars += 'new Car';
console.log(newStuff);