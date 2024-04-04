/*Código 1*/

function CalcularLanches(idade, maxIdade, lanches){
    const ano = 365
    let qtd = (maxIdade-idade)*ano*lanches;
    console.log("Você precisará de", qtd, "lanches para durar até a velhice de", maxIdade, "anos");
  }
  
  let minhaIdade = 18;
  let maxMinhaIdade = 69;
  let meusLanches = 5;
  CalcularLanches(minhaIdade, maxMinhaIdade, meusLanches);
  
  /*Código 2*/
  
  function CalcArea(r){
    const pi = Math.PI;
    circun = Math.round(pi*2*r)
    area = Math.round(pi*(r**2));
    console.log("A circunferência do círculo é de aproximadamente", circun, "centímetros")
    console.log("A área do círculo é de aproximadamente", area, "centímetros");
  }
  
  let raio = 4;
  CalcArea(raio);
  
  /*Código 3*/
  
  function traducao(lingua){
    switch (lingua) {
      case 'fr':
        console.log("Bonjour tout le monde!");
        break;
      
      case 'es':
        console.log("Hola, Mundo!");
        break;
      
      default:
        console.log("Hello World!");
        break;
    }
  }
  
  let lingua = 'fr'
  traducao(lingua);
  
  /*Código 4*/
  
  function retangulo(altura){
    
    let linha = ' '
    for(let index = 1; index<(altura+1); index++){
      linha += index + ' ';
      console.log(linha);
    }
  }
  
  let altura = 8;
  retangulo(altura);
  
  
  
  
  
