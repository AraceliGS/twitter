/* Código */
window.addEventListener('load', function() {
  var tweetArea = document.getElementById('tweet-area'); // Variable que encierra al elemento textarea
  var tweetBtn = document.getElementById('tweet-btn'); // Variable que encierra al elemento input
  var messages = document.getElementById('messages'); // Variable que encierra al elemento div que se encuentra en section
  var countDinamic = document.getElementById('count');
  var MAXCHARACTERS = 140;

  tweetArea.addEventListener('keydown', function(event) {
    if (event.target.value.trim().length) { // trim() muestra todos los caracteres escritos en el contenido del textarea, excepto espacio o si no se ha escrito nada
      var total = MAXCHARACTERS - event.target.value.trim().length;
      tweetBtn.disabled = false;
      countDinamic.textContent = MAXCHARACTERS - event.target.value.trim().length;
      if (event.target.value.trim().length > MAXCHARACTERS) {
        tweetBtn.disabled = true;
      }
      if (total <= 20 && total <= 140) {
        countDinamic.classList.add('allowed');
        countDinamic.classList.remove('not-many');
        countDinamic.classList.remove('warning');
        countDinamic.classList.remove('negative');
      }
      if (10 <= total && total < 20) {
        countDinamic.classList.add('not-many');
        countDinamic.classList.remove('allowed');
        countDinamic.classList.remove('warning');
        countDinamic.classList.remove('negative');
      }
      if (0 <= total && total < 10) {
        countDinamic.classList.add('warning');
        countDinamic.classList.remove('allowed');
        countDinamic.classList.remove('not-many');
        countDinamic.classList.remove('negative');
      }   
      if (total < 0) {
        countDinamic.classList.add('negative');
        countDinamic.classList.remove('allowed');
        countDinamic.classList.remove('not-many');
        countDinamic.classList.remove('warning');
      }
    } else {
      tweetBtn.disabled = true;
      countDinamic.textContent = MAXCHARACTERS;
    }
    // El textarea debe crecer de acuerdo al tamaño del texto al presionar enter(/n) 
    var text = event.target.value.split('');
    var acum = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === '\n') {
        acum++;
      }
      if (acum) {
        event.target.rows = acum + 2;
      }
    }
    // Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll
    if ((event.target.value.trim().length / event.target.cols) < event.target.rows) {
      event.target.rows = (event.target.value.trim().length / event.target.cols) + 2;
    }
  });
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

    tweetArea.value = ''; // Esto me sirve para borrar el contenido que quede en mi textarea después de escribir y enviar mi tweet
    tweetArea.focus(); 
    tweetBtn.disabled = true;
    countDinamic.textContent = MAXCHARACTERS;
  });
});