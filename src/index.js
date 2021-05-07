import decode from './decode.js'
import encode from './encode.js'


const encodeBtn = document.getElementById("btn-encode");
encodeBtn.addEventListener("click", encodeInput);
const decodeBtn = document.getElementById("btn-decode");
decodeBtn.addEventListener("click", decodeInput);




function encodeInput(){
  let infoText = document.getElementById("text-encode").value.toUpperCase();
  let offset = Number(document.getElementById("select-offset").value);
  if (infoText===""){
      alert("Digite o texto para ser codificado");
  }
  else{
    let comparing = encode.encode(offset, infoText);
    document.getElementById("text-encode-done").innerHTML=comparing;
    containerClear()  
  }
}

function decodeInput(){
  let infoDecipher= document.getElementById("text-decode").value.toUpperCase();
  let offset = Number(document.getElementById("select-offset-deco").value);
  if (infoDecipher===""){
    alert("Digite o texto para ser decodificado");
  }
  else{
    let comparingDecode = decode.decode(offset, infoDecipher);
    document.getElementById("text-decode-done").innerHTML=comparingDecode; 
    containerClear()  
  }
}

function containerClear(){
  document.getElementById("text-decode").value = "";
  document.getElementById("text-encode").value = "";
}
