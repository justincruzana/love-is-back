const text = document.querySelector ('.love-is-back');
const stringText = text.textContent;
const splitText = stringText.split('');
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if(char === splitText.length){
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

