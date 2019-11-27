import EventEmitter2 from 'eventemitter2';
import Playlist from './Playlist.js';

const KEYCODE_SPACE = 32;
const KEYCODE_P = 80;
const KEYCODE_N = 78;
const KEYCODE_B = 66;

class Player extends EventEmitter2 {

  constructor($el) {
    super({}); // roep de constructor op van EventEmitter2
    this.$el = $el;

    this.playlist = new Playlist(this.$el);
  }

}

export default Player;
