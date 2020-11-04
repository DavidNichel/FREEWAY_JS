//Codigos do ator

//variaveis ator
let yAtor = 366;
let xAtor = 85;

//var colisao
let colisao = false;

//var meus pontos
let meusPontos = 0;

function mostraAtor(){
   // 100=x, 366=y(local onde ficara o ator), 30,30(tamanho do ator)
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],  larguraCarro, alturaCarro, xAtor, yAtor, 15 )
    if (colisao){
     voltaAtorInicio();
      somColisao.play();
      if (meusPontos == 0){
      voltaAtorInicio();
      }else
      meusPontos -= 1;
    }
  }
}
function voltaAtorInicio(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255,245,60))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorInicio();
  }
}

function podeSeMover(){
   return yAtor < 366;
}