import {radioPlayerInit} from './radio-player.js';
import {musicPlayerInit} from './music-player.js';
import {videoPlayerInit} from './video-player.js';

const names = [`Slava`, `Sergio`, `Manya`];

const obj = {
  hi: `Hi`,
  hello: `Hello`,
  checkName(name) {
    if (name === `Slava`) {
      return `${name} ${this.hello}`;
    } else {
      return `${name} ${this.hi}`; 
    }
  }
};

const check = function(item, i, arr) {
  console.log(this.checkName(item));
};

names.forEach(check, obj);

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


videoPlayerInit();
radioPlayerInit();
musicPlayerInit();
