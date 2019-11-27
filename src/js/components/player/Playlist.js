import EventEmitter2 from 'eventemitter2';

class Playlist extends EventEmitter2 {

  constructor($el) {
    super({}); // roep de constructor op van EventEmitter2
    this.$el = $el;
  }

}

export default Playlist;
