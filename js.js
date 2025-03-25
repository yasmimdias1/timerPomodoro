const html = document.querySelector('html')
const foco = document.querySelector('.app__card-button--foco');
const curto = document.querySelector('.app__card-button--curto');
const longo = document.querySelector('.app__card-button--longo');
const imgFundo = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const tempoTela = document.querySelector('.app__card-timer')
const startPause = document.getElementById('start-pause');
const iconBtn = document.querySelector('.app__card-primary-butto-icon');

let tempoDecorrido=1500;
let intervaloTemporizador=null

foco.addEventListener('click', () => {
    tempoDecorrido = 1500;
    mudarFundo('foco');
});

curto.addEventListener('click', () => {
    tempoDecorrido = 300;
    mudarFundo('descanso-curto'); 
});

longo.addEventListener('click', () => {
    tempoDecorrido = 900;
    mudarFundo('descanso-longo');
});

startPause.addEventListener('click', iniciarPausar);

function mudarFundo(contexto){
    mostrarTempo();
    html.setAttribute('data-contexto', contexto);
    imgFundo.setAttribute('src', `imagens/${contexto}.png`);
    
    switch (contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            foco.classList.add('active');
            curto.classList.remove('active');
            longo.classList.remove('active');
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            curto.classList.add('active');
            foco.classList.remove('active');
            longo.classList.remove('active');
            break;
        case "descanso-longo":
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>`;
            longo.classList.add('active');
            foco.classList.remove('active');
            curto.classList.remove('active');
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorrido<=0){
        zerar();
        return;
    }
    tempoDecorrido--;
    mostrarTempo();
}

function iniciarPausar(){
    if(intervaloTemporizador!=null){
        iconBtn.setAttribute('src', 'imagens/play_arrow.png');
        zerar();
        return;
    }
    iconBtn.setAttribute('src', 'imagens/pause.png')
    intervaloTemporizador=setInterval(contagemRegressiva, 1000);
}


function zerar(){
    clearInterval(intervaloTemporizador);
    intervaloTemporizador=null;

}

function mostrarTempo(){
    const tempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();







