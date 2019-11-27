import EventEmitter2 from 'eventemitter2';

class Playlist extends EventEmitter2 {

  constructor($el) {
    super({}); // roep de constructor op van EventEmitter2
    this.$el = $el;
    this._items = this.parseItemsFromEl();
    this._currentIndex = 0;

    console.log(this._items);
  }

  get _currentIndex(){
    return this._currentIndex;
  }

  set _currentIndex(value){
    this._currentIndex = value;
  }

  parseItemsFromEl(){
    const $links = this.$el.querySelectorAll(`.playlist__link`);
    const urls  = [];
    $links.forEach(link => {
      urls.push({url: link.href});
    });
    return urls;
  }

}

export default Playlist;
