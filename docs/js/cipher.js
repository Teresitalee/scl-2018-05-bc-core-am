window.cipher = {

  // eventos del DOM
  function clearBoxes() {
    document.querySelector('#decode').value = "";
    document.querySelector('#encode').value = "";
    document.getElementById("chains").value = "";
    document.getElementById("key").value = 0;
}
function encode() {
    let decode = document.querySelector('#decode').value.toLocaleUpperCase() || "Buen dia";
    let encode = document.querySelector('#encode');
    let key = document.querySelector('#key');
    let cipherArray = new Array();
    [...decode].forEach(char => {
        
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            
            cipherChar = (charNumber + parseInt(key.value)) % 26;
            
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
    
}
function decode() {
    let decode = document.querySelector('#decode');
    let encode = document.querySelector('#encode').value.toLocaleUpperCase();
    let key = document.querySelector('#key');
    let cipherArray = new Array();
    [...encode].forEach(char => {
       
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            
            cipherChar = (charNumber - parseInt(key.value));
           
            if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
            cipherChar = cipherChar % 26
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
   
}
function getKey() {
    let decode = document.querySelector('#decode').value.toLocaleUpperCase();
    let encode = document.querySelector('#encode').value.toLocaleUpperCase();
    let cipherArray = new Array();
    document.getElementById("chains").value = "";
    for (let i = 0; i < 26; i++) {
        cipherArray.length = 0;
        [...encode].forEach(char => {
            
            if (char.charCodeAt() === 32) {
                cipherArray.push(32);
            } else {
                charNumber = char.charCodeAt() - 65;
                
                cipherChar = (charNumber - i);
                
                if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
                cipherChar = cipherChar % 26
                cipherArray.push(cipherChar + 65);
            }
        })
        document.getElementById("chains").value += `Key ${i}: ${String.fromCharCode(...cipherArray)}\n`;
      
        if (String.fromCharCode(...cipherArray) === decode) {
            document.getElementById("chains").value = `Key is: ${i}\n`;
            
            break;
        }
        if (i === 25) {
            document.getElementById("chains").style.display = "block";
        }
    }
    encode.value = String.fromCharCode(...cipherArray);
    
}