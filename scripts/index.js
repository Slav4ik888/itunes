import {radioPlayer} from './radio-player.js';
import {musicPlayer} from './music-player.js';
import {videoPlayer} from './video-player.js';

const
  temp = document.querySelector(`.temp`),
  playerBtn = document.querySelectorAll(`.player-btn`),
  playerBlock = document.querySelectorAll(`.player-block`);


const deactivationPlayer = () => {
  temp.style.display = `none`;
  playerBtn.forEach( item => item.classList.remove(`active`));
  playerBlock.forEach( item => item.classList.remove(`active`));
}

playerBtn.forEach( (btn, i) => btn.addEventListener(`click`, () => {
    deactivationPlayer();
    btn.classList.add(`active`);
    playerBlock[i].classList.add(`active`);
}));


radioPlayer();
musicPlayer();
videoPlayer();
