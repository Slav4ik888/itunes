export const radioPlayerInit = () => {
  const
    radio = document.querySelector(`.radio`),
    radioCoverImg = document.querySelector(`.radio-cover__img`),
    radioNavigation = document.querySelector(`.radio-navigation`),
    radioHeaderBig = document.querySelector(`.radio-header__big`),
    radioItem = document.querySelectorAll(`.radio-item`),
    radioStop = document.querySelector(`.radio-stop`),
    radioVolume = document.querySelector(`.radio-volume`),
    radioMute = document.querySelector(`.radio-mute`);
  
  const audio = new Audio();
  audio.type =  `audio/aac`;

  radioStop.disabled = true;
  radioVolume.value = radioVolume.max;


  let prevVolume = radioVolume.max;

  const toggleAudio = () => {
    if (audio.paused) {
      audio.play();
      radio.classList.add(`play`);

      radioStop.disabled = false;
    } else {
      audio.pause();
      radio.classList.remove(`play`);

    }
  };

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.add(`play`);
      radioStop.classList.remove(`fa-play`);
      radioStop.classList.add(`fa-stop`);
      
    } else {
      radio.classList.remove(`play`);
      radioStop.classList.add(`fa-play`);
      radioStop.classList.remove(`fa-stop`);
    }
  }

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove(`select`));
    elem.classList.add(`select`);

  }

  radioStop.addEventListener(`click`, () => {
    changeIconPlay();
    toggleAudio();

  });

  radioNavigation.addEventListener(`change`, event => {
    const target = event.target;
    // Ищем родителя вверх
    const parent = target.closest(`.radio-item`);
    selectItem(parent);
    const title = parent.querySelector(`.radio-name`).textContent;
    radioHeaderBig.textContent = title;
    
    const img = parent.querySelector(`.radio-img`).src;
    radioCoverImg.src = img;

    audio.src = target.dataset.radioStantion;
    
    // console.log('audio.volume: ', audio.volume);
    // audio.muted = true;
    changeIconPlay();
    toggleAudio();

  });

  radioVolume.addEventListener(`change`, ()  => {
    audio.volume = radioVolume.value / radioVolume.max;
    prevVolume = audio.volume;

  });

  radioMute.addEventListener(`click`, () => {
    console.log(1);
    if (audio.volume) {
      prevVolume = audio.volume;
      radioVolume.value = 0;
      audio.volume = 0;
    } else {
      audio.volume = prevVolume;
      radioVolume.value = prevVolume;
    }
  }); 

  radioPlayerInit.stop = () => {
      audio.pause();
      changeIconPlay();
      radioStop.disabled = true;
  };

};
