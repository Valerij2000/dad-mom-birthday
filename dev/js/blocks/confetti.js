function initConfetti() {
  const pointBum = document.querySelector('#confetti-connect');

  confetti({
    particleCount: 1000,
    spread: 150,
    origin: {
      y: (pointBum.getBoundingClientRect().bottom + 60) / window.innerHeight,
    },
  });
}