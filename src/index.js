import "./style.css";
import Player from './js/components/player/Player.js'

const init = () => {
  const player = new Player(document.querySelector('.player'));
  window.player = player;
};

init();
