import EventEmitter2 from 'eventemitter2';

class Playlist extends EventEmitter2 {

  constructor($el) {
    super({}); // roep de constructor op van EventEmitter2
    this.$el = $el;
    this._items = this.parseItemsFromEl();
    this._currentIndex = 0; // _ is voor items die je niet van buitenaf haalt
    console.log(this._items);
  }

  get currentIndex(){
    return this._currentIndex;
  }

  set currentIndex(value){
    if (value < 0) {
      value = this._items.length - 1;
     }
     if (value > this._items.length -1) {
      value = 0;
     }
     if (value === this._currentIndex) {
      return; // doe niets indien dit al de huidige index is
     }

     this.currentIndex = value;
     
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
