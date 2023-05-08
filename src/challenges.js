// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  const strFrag = str.split(' ');
  return strFrag;
}

// Desafio 4
function concatName(arr) {
  let ultimo = (`${arr[arr.length - 1]}, ${arr[0]}`);
  return ultimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let points = winsPoints + tiesPoints;
  return points;
}

// Desafio 6
function highestCount(arrayCount) {
  let max = arrayCount[0];
  let contador = 1;
  for (let index = 1; index < arrayCount.length; index += 1) {
    if (max < arrayCount[index]) {
      max = arrayCount[index];
      contador = 1;
    } else if (max === arrayCount[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let trombar = 'os gatos trombam e o rato foge';

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return trombar;
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let fizzBuzz = [];
  for (let fizz = 0; fizz < arrayFizz.length; fizz += 1) {
    if (arrayFizz[fizz] % 5 === 0 && arrayFizz[fizz] % 3 === 0) {
      fizzBuzz.push('fizzBuzz');
    } else if (arrayFizz[fizz] % 3 === 0) {
      fizzBuzz.push('fizz');
    } else if (arrayFizz[fizz] % 5 === 0) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(fraseEncode) {
  let fraseEncodeFrag = fraseEncode.split('');
  for (let i = 0; i < fraseEncode.length; i += 1) {
    if (fraseEncodeFrag[i] === 'a') {
      fraseEncodeFrag[i] = '1';
    } else if (fraseEncodeFrag[i] === 'e') {
      fraseEncodeFrag[i] = '2';
    } else if (fraseEncodeFrag[i] === 'i') {
      fraseEncodeFrag[i] = '3';
    } else if (fraseEncodeFrag[i] === 'o') {
      fraseEncodeFrag[i] = '4';
    } else if (fraseEncodeFrag[i] === 'u') {
      fraseEncodeFrag[i] = '5';
    }
  }
  fraseEncode = fraseEncodeFrag.join('');
  return fraseEncode;
}

function decode(fraseDecode) {
  fraseDecodeFrag = fraseDecode.split('');
  for (let i = 0; i < fraseDecode.length; i += 1) {
    if (fraseDecodeFrag[i] === '1') {
      fraseDecodeFrag[i] = 'a';
    } else if (fraseDecodeFrag[i] === '2') {
      fraseDecodeFrag[i] = 'e';
    } else if (fraseDecodeFrag[i] === '3') {
      fraseDecodeFrag[i] = 'i';
    } else if (fraseDecodeFrag[i] === '4') {
      fraseDecodeFrag[i] = 'o';
    } else if (fraseDecodeFrag[i] === '5') {
      fraseDecodeFrag[i] = 'u';
    }
  }
  fraseDecode = fraseDecodeFrag.join('');
  return fraseDecode;
}

// Desafio 10
function techList(arrayTec, stringTec) {
  arrayTec = arrayTec.sort();
  if (arrayTec.length !== 0) {
    for (let key in arrayTec) {
      arrayTec[key] = {
        tech: arrayTec[key],
        name: stringTec,
      };
    }
  } else {
    return 'Vazio!';
  }
  return arrayTec;
}
let arrayTec = ['google', 'amazon', 'mercadolivre'];
let stringTec = ['godddogle', 'amadddzon', 'mercadodddlivre'];
console.log(techList(arrayTec, stringTec));

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
