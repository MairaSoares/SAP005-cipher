const desloc = Number (65);
const alphabet = Number(26);

const encode = {
encode(offset, text) {
    let stringCode=" ";
    if (typeof offset !='number' && typeof text !='string'){
      throw new TypeError();
    }
    else{
          for (let i = 0; i < text.length; i++) {      
            let treating = text.charCodeAt(i);

            if (treating>= 48 && treating <= 57){  
              alert("Digite apenas letras");
            }
            else if(treating>= 65 && treating <= 90){
                stringCode+=String.fromCharCode((treating- desloc + offset) % alphabet+ desloc);
            }
          }
      return stringCode;
    } 
}
}

export default encode;