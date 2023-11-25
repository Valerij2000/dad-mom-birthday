function initGlory(element) {
  const target = element;

  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
  const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
  const flickerAndColorText = text =>
    text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
  const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


  neonGlory(target);
  target.onclick = ({
    target
  }) => neonGlory(target);
}

window.onscroll = function () {
  if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
    console.log(1)
    initGlory(window.document.getElementsByClassName('gl-2')[0]);
  }
};