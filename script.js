const caixaTexto = document.querySelector(".caixa-texto");
const caixaTexto2 = document.querySelector(".caixatexto2");

function criptografar(){
    const textoEncriptado = encriptar(caixaTexto.value);
    caixaTexto2.value = textoEncriptado;
   
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function descriptografar(){
    const textoDesencriptado = desencriptar(caixaTexto.value);
    caixaTexto2.value = textoDesencriptado;
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    let textCopia = document.querySelector(".caixatexto2");
    textCopia.select();
    document.execCommand("copy");
    alert("O texto foi copiado! " + textCopia.value);
}