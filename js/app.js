/* Código */
window.addEventListener('load', function() {
  var tweetArea = document.getElementById('tweet-area'); // Variable que encierra al elemento textarea
  var tweetBtn = document.getElementById('tweet-btn'); // Variable que encierra al elemento input
  var messages = document.getElementById('messages'); // Variable que encierra al elemento div que se encuentra en section

  tweetBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Esto me permite visualizar el valor del textarea en la consola haciendo que no desaparezca 
    // console.log(tweetArea.value); ---> Lo utilice para comprobar si con esto puedo obtener lo escrito en el textarea al hacer click        
    // Creando nodos donde se mostrará lo escrito en el textarea
    var div = document.createElement('div');
    var tweet = document.createElement('span');
    var tweetText = document.createTextNode(tweetArea.value);
    // Anexando nodos
    tweet.appendChild(tweetText);
    div.appendChild(tweet);
    div.classList.add('nuevo-mensaje');
    div.classList.add('tweet');
    messages.insertBefore(div, messages.firstElementChild); // si hay algún nodo elemento en el div con el atributo id messages entonces este nuevo nodo se insertará antes que él. De lo contrario, será el primer elemento.

    // Esto me sirve para borrar el contenido qu quede en mi textarea después de escribir y enviar mi tweet
    tweetArea.value = '';
  });
});