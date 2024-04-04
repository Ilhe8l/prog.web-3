/*1. Crie um array que contenha uma informação qualquer de sua escolha, como por exemplo: cores,
times, comidas etc. Para cada item do array, imprima na tela “Minha escolha 1 é azul” , Minha escolha 2 é
vermelho”, etc.*/

let cores = ['azul', 'vermelho', 'amarelo', 'verde', 'rosa'];

function percorrer_array(array){
  for(i=0; i<array.length; i++){
    console.log('Minha escolha', i+1, 'é', cores[i]);
  }
}

percorrer_array(cores);

/*2. Crie um array com as entradas [1,2,3,4,5] e imprima na tela o quadrado dessas entradas. Utilize a
função map do javascript para construir o código.*/

let numeros = [1, 2, 3, 4, 5,];
let quadrado = numeros.map(numero => Math.pow(numero, 2));

console.log(quadrado)

/*3. Crie código em javascript que transforme um numero qualquer em número romano. Imprima na tela o
número romano referente ao número escolhido. Utilize um array para armazenar os números romanos.*/

function numero_romano(num){
  const valores = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  resultado = '';
    for(i in valores){
      while (num >= valores[i]){
        resultado += i;
        num -= valores[i];
    }
  }
  return resultado;
}

console.log(numero_romano(364));
