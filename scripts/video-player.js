import {addZero} from './support.js';

export const videoPlayerInit = () => {


  const 
    videoPlayer = document.querySelector(`.video-player`),
    videoButtonPlay = document.querySelector(`.video-button__play`),
    videoButtonStop = document.querySelector(`.video-button__stop`),
    videoTimePassed = document.querySelector(`.video-time__passed`),
    videoTimeTotal = document.querySelector(`.video-time__total`),
    videoProgress = document.querySelector(`.video-progress`);


  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove(`fa-pause`);
      videoButtonPlay.classList.add(`fa-play`);
    } else {
      videoButtonPlay.classList.add(`fa-pause`);
      videoButtonPlay.classList.remove(`fa-play`);
    }
  }


  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }


  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }



  
  videoPlayer.addEventListener(`click`, togglePlay);
  videoButtonPlay.addEventListener(`click`, togglePlay);
  
  videoPlayer.addEventListener(`play`, toggleIcon);
  videoPlayer.addEventListener(`pause`, toggleIcon);

  videoPlayer.addEventListener(`timeupdate`, () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    let minutePassed = Math.floor(currentTime / 60);
    let secondPassed = Math.floor(currentTime % 60);
    let minuteTotal = Math.floor(duration / 60);
    let secondTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`; 
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
  
    videoProgress.value = currentTime * 100 / duration;
    
  });

  videoButtonStop.addEventListener(`click`, stopPlay);

  videoProgress.addEventListener(`change`, () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = value * duration / 100;
  })
};
