const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyColor: document.querySelector('body'),
};
let timerId = null;
refs.startBtn.addEventListener('click', onStartColor);
refs.stopBtn.addEventListener('click', onStopColor);

function onStartColor() {
  timerId = setInterval(() => {
    console.log(refs.bodyColor);

    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.removeEventListener('click', onStartColor);
}

function onStopColor() {
  clearInterval(timerId);
  refs.startBtn.addEventListener('click', onStartColor);
}
//

//

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
