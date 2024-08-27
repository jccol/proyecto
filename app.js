function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("visules");

    let textoCifrado = texto
        .replace(/e/ig, "enter")
        .replace(/i/ig, "ines")
        .replace(/a/ig, "ai")
        .replace(/o/ig, "ober")
        .replace(/u/ig, "ufat");


    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/finalizado.png";
    } else {
        muñeco.src = "./assets/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar un texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("visules");

    let textoCifrado = texto
        .replace(/enter/ig, "e")
        .replace(/ines/ig, "i")
        .replace(/ai/ig, "a")
        .replace(/ober/ig, "o")
        .replace(/ufat/ig, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto dencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/procesando.png";
    } else {
        muñeco.src = "./assets/buscando.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert ("Debes ingresar un texto");
    }
}