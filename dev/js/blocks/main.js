MicroModal.init();
MicroModal.show("modal-start");

// Soundtracks
const button = document.querySelector('.button');
const playerBack = document.querySelector('#player-back');
playerBack.volume = 0.6;
playerBack.load();

function disactiveModal() {
  MicroModal.close("modal-start");
  document.querySelector('body').classList.remove('blur');
}

button.addEventListener('click', () => {
  disactiveModal();
  playerBack.play();
  initConfetti();
  initGlory(window.document.getElementsByClassName('gl-1')[0]);
})