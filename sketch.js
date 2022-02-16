var palavra;
var letras = [];
var acertos = [];
var chute, copiaChute;
var chance;
var pontuar;
var gallows;

function setup() {
  createCanvas(400, 400);
  gallows = loadImage("gallows.png")
  palavra = "fogo";
  for(i=0;i<palavra.length;i++){
    letras[i] = palavra.charAt(i);
    acertos[i] = "";
  }
  chute="";
  copiaChute="";
  chance = 10;
  pontuar = false;
}

function draw() {
  background(gallows, 70);
  
  desenharQuadrados();
  
  hud();
  
  verificarLetras();
  

  
}

function hud(){
  //desenho da letra no topo da tela
  fill('green');
  textSize(36);
  text(copiaChute,200,30);
  
  //desenho do score
  fill('green');
  textSize(20);
  text("Chances: "+chance,30,30);
}

function verificarLetras(){
 
  
  //desenha as letras achadas
  for(i=0;i<palavra.length;i++){
        textSize(46);
        fill('black')
        text(acertos[i],50+(95*i),340);
  }
  
  if(pontuar==true){
    pontuar = false;
    chute=" ";
  }
  
}

function desenharQuadrados(){
  //desenho dos quadrados
  for(i=0;i<palavra.length;i++){
    fill('white')
    square(45+(90*i),300,50);
    //textSize(46);
    //fill('black')
    //text(letras[i],40+(85*i),240);
  }
}


function keyTyped(){
  chute = key;
  copiaChute = key;
  
  //encontra a letra e guarda no vetor de acerto;
  for(i=0;i<palavra.length;i++){
    if(letras[i]==chute){
        acertos[i] = chute;
        pontuar = true;
    }
    
  }
  if(pontuar ==false){
    chance=chance-1;
  }
  
}