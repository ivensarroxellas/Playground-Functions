// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a == true && b == true) {
    return true;
  } 
    return false;
}
const girafa = true;
const elefante = true;
const macaco = false;
let a = girafa
let b = elefante
console.log(compareTrue(a,b))

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  area = (base * height)/2;
  return area;

}
let base = 10;
let height = 50;
console.log(calcArea(base,height))

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  strFrag = str.split(" ");
  return strFrag
}
str = "vamos que vamos"
console.log(splitSentence(str));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let ultimo  = (arr[arr.length-1]+", "+arr[0]);
  return ultimo;
}
arr = ["Lucas", "Jorginho", "José", "Paulo"]
console.log(concatName(arr));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
