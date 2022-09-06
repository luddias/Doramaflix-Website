
fundo=["bp", "ey", "bandc", "obs", "trw", "w"];
lista=['drama-business','drama-extra','drama-badandcrazy','drama-ourbs','drama-trw','drama-w'];
let i=0;
function mudardrama(){  
 
  let atual = document.getElementById(lista[i]);
  let atual2 = document.getElementById(fundo[i]);

  if (i==5){
    i=-1;
  }
  let prox = document.getElementById(lista[i+1]);
  atual.classList.remove('selecionado');
  prox.classList.add('selecionado');

  let prox2 = document.getElementById(fundo[i+1]);
  atual2.classList.remove('fundo-selecionado');
  prox2.classList.add('fundo-selecionado');
  i++;
}

function voltardrama(){  
 
  let atual = document.getElementById(lista[i]);
  let atual2 = document.getElementById(fundo[i]);

  if (i==0){
    i=6;
  }
  let prox = document.getElementById(lista[i-1]);
  atual.classList.remove('selecionado');
  prox.classList.add('selecionado');

  let prox2 = document.getElementById(fundo[i-1]);
  atual2.classList.remove('fundo-selecionado');
  prox2.classList.add('fundo-selecionado');

  i--;
}

function abertura(){
  let texto=document.getElementById('autor');
  setTimeout(() => {  texto.style.opacity=1; }, 3000);

}  

function transicao(){
  let pagina=document.getElementById('tela-inicial');
  pagina.style.opacity=0;
  pagina.classList.add('alteracao');
}
