let tamanho = 16;

function entrar(){

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
    "Oi, " + nome + "!";
}

function aumentar(){

    tamanho = tamanho + 2;

    document.getElementById("texto").style.fontSize = tamanho + "px";

}

function diminuir(){

    tamanho = tamanho - 2;

    document.getElementById("texto").style.fontSize = tamanho + "px";

}
