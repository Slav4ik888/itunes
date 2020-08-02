import {radioPlayerInit} from './radio-player.js';
import {musicPlayerInit} from './music-player.js';
import {videoPlayerInit} from './video-player.js';


////////////////////////////////////////////////////
// const names = [`Slava`, `Sergio`, `Manya`];

// const obj = {
//   hi: `Hi`,
//   hello: `Hello`,
//   checkName(name) {
//     if (name === `Slava`) {
//       return `${name} ${this.hello}`;
//     } else {
//       return `${name} ${this.hi}`; 
//     }
//   }
// };

// const check = function(item, i, arr) {
//   console.log(this.checkName(item));
// };

// names.forEach(check, obj);
////////////////////////////////////////////////////

// let Character = function (setting) {
//   this.name = setting.name;
//   this.health = setting.health;
//   this.armor = setting.armor;
//   this.gender = `man`;

//   this.died = false;
// };

// Character.prototype.walk = function  (step) {
//   console.log(this.name + ` прошёл ` + step + ` шагов`);
// };

// const SM = new Character({
//   name: `Slava`, 
//   health: 10000,
//   armor: 300
// });

// console.log(SM);

// SM.walk(5000);

// const CharGirl = function(setting) {
//   Character.call(this, setting);
//   this.gender = `girl`;
// };
// CharGirl.prototype = Object.create(Character.prototype);

// const SG = new CharGirl({
//   name: `SuperGirl`,
//   health: 7000,
//   armor: 350,
// });

// console.log(SG);
// SG.walk(200);

////////////////////////////////////////////////////
// class Haracter {
//   constructor(setting) {
//     this.name = setting.name;
//     this.health = setting.health;
//     this.armor = setting.armor;
//     this.gender = `man`;

//     this.died = false;
//   }

//   walk(step) {
//     console.log(this.name + ` прошёл ` + step + ` шагов`);
//   }
// };


// const SM2 = new Haracter({
//   name: `Slava`, 
//   health: 10000,
//   armor: 300
// });

// console.log(SM2);

// SM2.walk(5000);

// class HarGirl extends Haracter {
//   constructor(props) {
//     super(props);
//     this.gender = `girl`;
//   }
// };

// const SG2 = new HarGirl({
//   name: `SuperGirl2`,
//   health: 8000,
//   armor: 550,
// });

// console.log(SG2);
// SG2.walk(200);


////////////////////////////////////////////////////

const
  temp = document.querySelector(`.temp`),
  playerBtn = document.querySelectorAll(`.player-btn`),
  playerBlock = document.querySelectorAll(`.player-block`);


const deactivationPlayer = () => {
  temp.style.display = `none`;
  playerBtn.forEach( item => item.classList.remove(`active`));
  playerBlock.forEach( item => item.classList.remove(`active`));

  videoPlayerInit.stop();
  radioPlayerInit.stop();
  musicPlayerInit.stop();

}

playerBtn.forEach( (btn, i) => btn.addEventListener(`click`, () => {
    deactivationPlayer();
    btn.classList.add(`active`);
    playerBlock[i].classList.add(`active`);
}));


videoPlayerInit();
radioPlayerInit();
musicPlayerInit();

// // Подключаем ф-ию из Node.js для работы с файловой системой
// const fs = require(`fs`);

// // Папка где лежит наше audio
// const audioPath = `./audio`;

// fs.readdir(audioPath, (err, files) => {
//   // console.log(files);
//   files.forEach(file => {
//     // console.log(file);
//     console.log(`./audio/${file}`);

//   })
// });

// // Чтобы запустить надо в терминале запустить node scripts/index.js