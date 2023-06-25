const text = document.querySelector('.love-is-back'); 
const stringText = text.textContent.split(''); 
// text.textContent
// LOVE IS BACK

// text.textContent.split('')
// stringText = ['L', 'O', 'V', 'E' , ' ' ....]
// stringText[0] = L
// stringText[1] = O 
// LOVE  IS BACK

// const splitText = stringText.split('');
text.textContent = "";

for (let i = 0; i < stringText.length; i++) {
  if(stringText[i] === ' '){
    text.innerHTML += "<span> </span>"
  } else {
    text.innerHTML += "<div class='love-animation'>" + stringText[i] + "</div>";
  }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('.love-animation')[char];
  span.classList.add('fade');
  char++;
  if(char === stringText.length){
    complete();
    return;
  }
}

function complete ( ){
  clearInterval(timer);
  timer = null;
}

function scrollDownAppear () {
  var aboutContent = document.querySelector('.about-content-1');
  var aboutContentPosition = aboutContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight * 1.5;

  if (aboutContentPosition > screenPosition) {
    aboutContent.classList.add('about-content-1-appear','about-content-2-appear')
  }
  
}


window.addEventListener ('scroll',scrollDownAppear);

