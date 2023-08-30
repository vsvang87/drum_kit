window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //stop function if there are no sound
  if (!audio) return;
  audio.currentTime = 0; //rewind sound to start
  audio.play();

  key.classList.add("playing");
  key.classList.remove("playing");
});
a;
