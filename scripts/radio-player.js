export const radioPlayerInit = () => {
  const
    radio = document.querySelector(`.radio`),
    radioCoverImg = document.querySelector(`.radio-cover__img`),
    radioNavigation = document.querySelector(`.radio-navigation`),
    radioHeaderBig = document.querySelector(`.radio-header__big`),
    radioItem = document.querySelectorAll(`.radio-item`),
    radioStop = document.querySelector(`.radio-stop`);
  
  const audio = new Audio();
  audio.type =  `audio/aac`;

  radioStop.disabled = true;

  const toggleAudio = () => {
    if (audio.paused) {
      audio.play();
      radioStop.disabled = false;
    } else {
      audio.pause();
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
    // audio.muted = true;
    changeIconPlay();
    toggleAudio();

  });

  // radioNavigation.addEventListener(`click`, () => {
  //   changeIconPlay();
  //   toggleAudio();
  // })
};
