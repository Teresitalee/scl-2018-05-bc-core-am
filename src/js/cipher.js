window.cipher = {

  // eventos del DOM
  function clearBoxes() {
    document.querySelector('#decrypted').value = "";
    document.querySelector('#encrypted').value = "";
    document.getElementById("chains").value = "";
    document.getElementById("key").value = 0;
}
function encrypt() {
    let decrypted = document.querySelector('#decrypted').value.toLocaleUpperCase() || "ejemplo";
    let encrypted = document.querySelector('#encrypted');
    let key = document.querySelector('#key');
    let cipherArray = new Array();
    [...decrypted].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber + parseInt(key.value)) % 26;
            //console.log(cipherChar)
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}
function decrypt() {
    let decrypted = document.querySelector('#decrypted');
    let encrypted = document.querySelector('#encrypted').value.toLocaleUpperCase();
    let key = document.querySelector('#key');
    let cipherArray = new Array();
    [...encrypted].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber - parseInt(key.value));
            //console.log(cipherChar)
            if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
            cipherChar = cipherChar % 26
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}
function getKey() {
    let decrypted = document.querySelector('#decrypted').value.toLocaleUpperCase();
    let encrypted = document.querySelector('#encrypted').value.toLocaleUpperCase();
    let cipherArray = new Array();
    document.getElementById("chains").value = "";
    for (let i = 0; i < 26; i++) {
        cipherArray.length = 0;
        [...encrypted].forEach(char => {
            //console.log(char.charCodeAt())
            if (char.charCodeAt() === 32) {
                cipherArray.push(32);
            } else {
                charNumber = char.charCodeAt() - 65;
                //console.log(charNumber)
                cipherChar = (charNumber - i);
                //console.log(cipherChar)
                if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
                cipherChar = cipherChar % 26
                cipherArray.push(cipherChar + 65);
            }
        })
        document.getElementById("chains").value += `Key ${i}: ${String.fromCharCode(...cipherArray)}\n`;
        //console.log(String.fromCharCode(...cipherArray))
        //console.log(decrypted)
        if (String.fromCharCode(...cipherArray) === decrypted) {
            document.getElementById("chains").value = `Key is: ${i}\n`;
            //console.log("Key is: " + i);
            break;
        }
        if (i === 25) {
            document.getElementById("chains").style.display = "block";
        }
    }
    encrypted.value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}