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
function footballPoints(wins,ties) {
  // seu código aqui
  winsPoints = wins * 3;
  tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints
  return points;
}
  console.log(footballPoints(14,8)) 

// Desafio 6
function highestCount(arrayCount) {
  // seu código aqui
  let max = arrayCount[0];
  let contador = 1;
  for (let index  = 1; index < arrayCount.length; index += 1){
    if (max < arrayCount[index]){
      max = arrayCount[index]
      contador = 1;
    } else if (max == arrayCount[index]) {
      contador += 1;
    }
   } 
  return contador
 }
let arrayCount = [1, 9, 2, 3, 9, 5, 7];
console.log(highestCount(arrayCount));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
    // seu código aqui
  let distanciacat1 = Math.abs(mouse-cat1)
  let distanciacat2 = Math.abs(mouse-cat2)

  if (distanciacat1 < distanciacat2) {
    return "cat1";
  }  else if (distanciacat1 > distanciacat2){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
 }
}

console.log(catAndMouse(4,1,3));
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
