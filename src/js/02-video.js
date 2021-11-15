import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_CODE = 'videoplayer-current-time';
const timeCodeSaved = data => {
  localStorage.setItem(TIME_CODE, data.seconds);
};

const takeTimeCode = localStorage.getItem(timeCodeSaved);
player.setCurrentTime(takeTimeCode);

player.on('timeupdate', throttle(timeCodeSaved, 1000));
