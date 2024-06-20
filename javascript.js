
// body

const body = document.querySelector('body');

body.style.height = '100vh';

body.style.backgroundImage = 'url("background.jpe")';

body.style.backgroundSize = 'cover';

body.style.display = 'flex';

body.style.fontFamily = 'monospace'

body.style.flexDirection = 'column';

body.style.margin = '0';

body.style.justifyContent = 'center';

body.style.alignItems = 'center';

//cabeçalho

const cabecalho = document.createElement('header');

cabecalho.style.display = 'flex';

cabecalho.style.paddingLeft = '10px';

cabecalho.style.height = '70px';

cabecalho.style.width = '100%';

cabecalho.style.gap = '5px';

cabecalho.style.alignItems = 'center';

cabecalho.style.backgroundColor = 'red';

body.appendChild(cabecalho);

// titulo site

const tituloSite = document.createElement('h1');

const logo = document.createElement('img');

logo.src = 'icon.jpeg';

logo.style.borderRadius = '50%';

logo.style.maxWidth = '60px';

cabecalho.appendChild(logo);

tituloSite.innerText = 'CALCULADORA MEDIA';

tituloSite.style.textAlign = 'center';

tituloSite.style.color = 'white';

tituloSite.style.fontSize = '26px';

cabecalho.appendChild(tituloSite);

// section

const secao = document.createElement('section');

secao.style.height = '799.9px';

secao.style.width = '599.9px';

secao.style.position = 'relative';

secao.style.display = 'flex';

secao.style.alignItems = 'center'

secao.style.padding = '10px 0';

secao.style.overflow = 'hidden';

secao.style.flexDirection = 'column'

body.appendChild(secao);

// titulo

const titulo = document.createElement('h1');

titulo.innerText = 'CALCULAR MEDIA';

titulo.style.color = 'white';

titulo.style.fontSize = '25px';

titulo.style.textAlign = 'center';

secao.appendChild(titulo);

//div inputs

const divInputs = document.createElement('div');

divInputs.style.height = '272px';

divInputs.style.width = '300px';

divInputs.style.position = 'relative';

divInputs.style.top = '13px';

secao.appendChild(divInputs);

// div nome

const divNome = document.createElement('div');

divNome.style.height = '69.9px';

divNome.style.width = '300px';

divNome.style.display = 'flex'

divNome.style.flexDirection = 'column';

divInputs.appendChild(divNome);


// label nome

const labelNome = document.createElement('label');

labelNome.innerText = 'NOME';

labelNome.style.fontSize = '18px';

labelNome.style.color = 'white';

divNome.appendChild(labelNome);

// nome

const inputNome = document.createElement('input');

inputNome.style.height = '39.9px';

inputNome.style.width = '299.9px';

inputNome.style.backgroundColor = 'transparent';

inputNome.style.outline = 'none';

inputNome.style.color = 'white';

inputNome.style.paddingLeft = '10px';

divNome.appendChild(inputNome);

inputNome.style.border = 'solid white 2px';

inputNome.style.borderRadius = '9.99px';

// div nota1

const divNota1 = document.createElement('div');

divNota1.style.height = '69.9px';

divNota1.style.width = '300px';

divNota1.style.display = 'flex'

divNota1.style.flexDirection = 'column';

divInputs.appendChild(divNota1);

// label nota1

const labelNota1 = document.createElement('label');

labelNota1.innerText = 'NOTA 1';

labelNota1.style.color = 'white';

labelNota1.style.fontSize = '18px';

divNota1.appendChild(labelNota1);

// nota1

const inputNota1 = document.createElement('input');

inputNota1.style.height = '39.9px';

inputNota1.style.width = '299.9px';

inputNota1.type = 'number';

inputNota1.style.backgroundColor = 'transparent';

inputNota1.style.outline = 'none';

inputNota1.style.color = 'white';

inputNota1.style.paddingLeft = '10px';

inputNota1.style.border = '0';

inputNota1.style.borderRadius = '9.99px';

inputNota1.style.border = 'solid white 2px';

divNota1.appendChild(inputNota1);

// div nota2

const divNota2 = document.createElement('div');

divNota2.style.height = '69.9px';

divNota2.style.width = '300px';

divNota2.style.display = 'flex'

divNota2.style.flexDirection = 'column';

divInputs.appendChild(divNota2);

// label nota2

const labelNota2 = document.createElement('label');

labelNota2.innerText = 'NOTA 2';

labelNota2.style.color = 'white';

labelNota2.style.fontSize = '18px';

divNota2.appendChild(labelNota2);

// inputNota2

const inputNota2 = document.createElement('input');

inputNota2.style.height = '39.9px';

inputNota2.style.width = '299.9px';

inputNota2.type = 'number';

inputNota2.style.backgroundColor = 'transparent';

inputNota2.style.outline = 'none';

inputNota2.style.color = 'white';

inputNota2.style.paddingLeft = '10px';

inputNota2.style.border = '0';

inputNota2.style.borderRadius = '9.99px';

inputNota2.style.border = 'solid white 2px';

divNota2.appendChild(inputNota2);

// div nota3

const divNota3 = document.createElement('div');

divNota3.style.height = '69.9px';

divNota3.style.width = '300px';

divNota3.style.display = 'flex'

divNota3.style.flexDirection = 'column';

divInputs.appendChild(divNota3);

// label nota3

const labelNota3 = document.createElement('label');

labelNota3.innerText = 'NOTA 3';

labelNota3.style.color = 'white';

labelNota3.style.fontSize = '18px';

divNota3.appendChild(labelNota3);

// inputNota3

const inputNota3 = document.createElement('input');

inputNota3.style.height = '39.9px';

inputNota3.style.width = '299.9px';

inputNota3.type = 'number';

inputNota3.style.backgroundColor = 'transparent';

inputNota3.style.outline = 'none';

inputNota3.style.color = 'white';

inputNota3.style.paddingLeft = '10px';

inputNota3.style.border = '0';

inputNota3.style.borderRadius = '9.99px';

inputNota3.style.border = 'solid white 2px';

divNota3.appendChild(inputNota3);

// botao

const botao = document.createElement('button');

botao.style.height = '39.9px';

botao.style.width = '299.9px';

botao.style.backgroundColor = '#D03947';

botao.style.position = 'relative';

botao.style.top = '60px';

botao.innerText = 'CALCULAR'

botao.style.border = '0';

botao.style.borderRadius = '9.99px';

botao.style.fontSize = '18px';

botao.style.color = 'white';

secao.appendChild(botao)

// javascript

const resultado = document.createElement('div');

resultado.innerText = '';

var media = 0;

botao.addEventListener('click', function(){
    var nome = inputNome.value;

    var nota1 = Number(inputNota1.value);

    var nota2 = Number(inputNota2.value);

    var nota3 = Number(inputNota3.value);

    media = (nota1 + nota2 + nota3) /3;

    
    resultado.style.height = '100px';

    resultado.style.width = '300px';

    resultado.style.position = 'relative';

    resultado.style.fontSize = '20px';
    
    resultado.style.fontWeight = '600';

    resultado.style.top = '70px';

    resultado.innerText = `Nome: ${nome} Media: ${media.toFixed(1)}`;

    secao.appendChild(resultado);

})

// rodape

const rodape = document.createElement('footer');

rodape.style.height = '70px';

rodape.style.width = '100%';

rodape.style.backgroundColor = 'red';

body.appendChild(rodape);

// dev

const dev = document.createElement('h1');

dev.innerText = 'Thayonara Barbosa';

dev.style.color = 'white';

dev.style.fontSize = '30px';

dev.style.textAlign = 'center';

rodape.appendChild(dev);

