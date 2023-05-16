const fotos = [
    {
        imagem: './assets/one.png',
        pergunta: 'Escolha o caminho para achar aprincesa',
        resposta: '1'
    },
    {
        imagem: './assets/two.png',
        pergunta: 'E agora você chegou aqui qual castelo vai escolher?',
        resposta: 'direita'
    },
      {
        imagem: './assets/four.png',
        pergunta: 'Muito bem você esta quase lá escolha agora por qual corredor vai seguir',
        resposta: 'direita'
    },
      {
        imagem: './assets/six.png',
        pergunta: 'Ahhh estamos quase lá agora escolha o baú e pegue a chave',
        resposta: '2'
    },
     {
        imagem: './assets/five.png',
        pergunta: 'Você chegou ao fim  a princesa precisa você escolha a porta certa e liberte ela',
        resposta: '2'
    }
];
const resultado = document.getElementById('resultado');

let fotoAtual = 0;

function atualizarFoto() {
    const imagem = document.getElementById('imagem');
    const pergunta = document.getElementById('pergunta');

    imagem.innerHTML = `<img src="${fotos[fotoAtual].imagem}" width="1000" height="500" alt="">`;
    pergunta.innerHTML = fotos[fotoAtual].pergunta;
}

function verificarResposta() {
    const resposta = document.getElementById('resposta');
    const respostaUsuario = resposta.value.toLowerCase();

    if (respostaUsuario === fotos[fotoAtual].resposta) {
        resultado.innerHTML = 'Muito bem siga em frente';
        fotoAtual++;
        if (fotoAtual < fotos.length) {
            atualizarFoto();
        } else {
            resultado.innerHTML = 'Fim do jogo! Ah Princesa esta salva parabéns!!';
            document.getElementById('fimJogoImg').style.display = 'block';
        }
    } else {
        resultado.innerHTML = ' Oh Errou!';
    }
    resposta.value = '';
}

const botao = document.getElementById('botao');
botao.addEventListener('click', verificarResposta);

atualizarFoto();


