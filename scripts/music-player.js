import {addZero} from './support.js';


export const musicPlayerInit = () => {
  const audio = document.querySelector(`.audio`);
  const audioImg = document.querySelector(`.audio-img`);
  const audioHeader = document.querySelector(`.audio-header`);
  const audioPlayer = document.querySelector(`.audio-player`);
  const audioNavigation = document.querySelector(`.audio-navigation`);
  const audioButtonPlay = document.querySelector(`.audio-button__play`);
  const audioTimePassed = document.querySelector(`.audio-time__passed`);
  const audioProgress = document.querySelector(`.audio-progress`);
  const audioProgressTiming = document.querySelector(`.audio-progress__timing`);
  const audioTimeTotal = document.querySelector(`.audio-time__total`);
  const audioVolume = document.querySelector(`.audio-volume`);
  const audioMute = document.querySelector(`.audio-mute`);

  
  const playlist = [`hello`, `flow`, `speed`];

  let trackIndex = 0;
  let prevVolume = audioVolume.max;
  audioVolume.value = audioVolume.max;

  const loadTrack = () => {
    const isPlayed = audioPlayer.paused;
    const track = playlist[trackIndex];
    audioImg.src = `./audio/${track}.jpg`;
    audioPlayer.src = `./audio/${track}.mp3`;
    audioHeader.textContent =  track.toUpperCase();

    if (isPlayed) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }

    audioPlayer.addEventListener(`canplay`, () => {
      updateTime();
    });
  };


  const nextTrack = () => {
    if (trackIndex !== playlist.length - 1) {
      trackIndex++;
    } else {
      trackIndex = 0;
    }
    loadTrack();
  };


  const prevTrack = () => {
    if (trackIndex !== 0) {
      trackIndex--;
    } else {
      trackIndex = playlist.length - 1;
    }
    loadTrack();
  };


  audioNavigation.addEventListener(`click`, event => {
    const target = event.target;
    // contains проверяет есть ли класс
    if (target.classList.contains(`audio-button__play`)) {
      audio.classList.toggle(`play`);
      audioButtonPlay.classList.toggle(`fa-play`);
      audioButtonPlay.classList.toggle(`fa-pause`);

      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }

      const track = playlist[trackIndex];
      audioHeader.textContent =  track.toUpperCase();
    }

    if (target.classList.contains(`audio-button__prev`)) {
      prevTrack();
    }

    if (target.classList.contains(`audio-button__next`)) {
      nextTrack();
    }
  });


  audioPlayer.addEventListener(`ended`, () => {
    nextTrack();
    audioPlayer.play();
  });

    
  const updateTime = () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = currentTime / duration * 100;

    audioProgressTiming.style.width = progress + `%`;

    const minutesPassed = Math.floor(currentTime / 60) || `0`;
    const secondsPassed = Math.floor(currentTime % 60) || `0`;

    const minutesTotal = Math.floor(duration / 60) || `0`;
    const secondsTotal = Math.floor(duration % 60) || `0`;

    audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
    audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;
  };


  audioPlayer.addEventListener(`timeupdate`, updateTime);

  
  audioProgress.addEventListener(`click`, e => {
    const x = e.offsetX;
    const allWidth = audioProgress.clientWidth;
    const progress =  x / allWidth * audioPlayer.duration;

    audioPlayer.currentTime = progress;
  });


  audioVolume.addEventListener(`change`, e => {
    const volume = e.target.value;
    audioVolume.value = volume;
    audioPlayer.volume = volume;
  });


  audioMute.addEventListener(`click`, () => {
    console.log('click: ');
    if (audioVolume.value > 0) {
      prevVolume = audioPlayer.volume;
      console.log('prevVolume: ', prevVolume);
      audioPlayer.volume = 0;
      audioVolume.value = 0;
    } else {
      audioPlayer.volume = prevVolume;
      audioVolume.value = prevVolume;
    }
  });

  musicPlayerInit.stop = () => {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      audio.classList.remove(`play`);
      audioButtonPlay.classList.remove(`fa-play`);
      audioButtonPlay.classList.add(`fa-paused`);
    }
  };
};
