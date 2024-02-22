const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const imgMini0 = document.getElementById("0-imagem-miniatura");
const imgMini1 = document.getElementById("1-imagem-miniatura");
const imgMini2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = { //objeto
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = { 
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = { 
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = { 
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]; //array
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-" + imagemSelecionada +  ".jpeg";
}

function trocarTamanho(){ //mudar o tamanho da imagem e o titulo do produto, atualizar variavel do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado =  idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    if(tamanhoSelecionado == 0){
        imagemVisualizacao.classList.add('caixa-pequena');
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena');
}
}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    //trocar miniaturas exibidas
    imgMini0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    imgMini1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    imgMini2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";
    //trocar imagens
    trocarImagem();
}