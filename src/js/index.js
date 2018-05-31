/* Acá va tu código */

// Escribir el resultado en el HTML
div = document.getElementById("resultado1");
      var cadena = "";
    for(i = 0; i < size_mensaje; i++){
  cadena += mensaje_cifrado[i];
 }
div.textContent = 'Mensaje cifrado: ' + cadena;
  }

// Escribir el resultado en el HTML
div = document.getElementById("resultado2");
   var cadena = "";
   for(i = 0; i < size_mensaje; i++){
  cadena += mensaje_descifrado[i];
}
div.textContent = 'Mensaje descifrado: ' + cadena;
}