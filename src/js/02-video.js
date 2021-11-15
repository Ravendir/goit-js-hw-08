import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TIME_CODE = 'videoplayer-current-time';

const savedPoint = localStorage.getItem(TIME_CODE);

player.setCurrentTime(savedPoint);

player.on('timeupdate', throttle(saveTimeCode, 1000));

function saveTimeCode(evt) {
  localStorage.setItem(TIME_CODE, evt.seconds);
}
