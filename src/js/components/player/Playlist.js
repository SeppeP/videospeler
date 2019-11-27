import EventEmitter2 from 'eventemitter2';

class Playlist extends EventEmitter2 {

  constructor($el) {
    super({}); // roep de constructor op van EventEmitter2
    this.$el = $el;
    this._items = this.parseItemsFromEl();
    this.currentIndex = 0; // _ is voor items die je niet van buitenaf haalt
    console.log(this._items);
    this.addListenersToPlaylistLinks();
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

     this._currentIndex = value;


     const $links = this.$el.querySelectorAll(`.playlist__link`);

     $links.forEach(($link, index) => {
      if(index===this._currentIndex){
        $link.classList.add("playlist__link--current");
      }else {
        $link.classList.remove("playlist__link--current");
      }
     });
     
  }

  eventHandler(e, index) {
    console.log('in de handler');
    e.preventDefault();
    this.currentIndex = index;
  }

  addListenersToPlaylistLinks(){

    const $links = this.$el.querySelectorAll(`.playlist__link`);
    $links.forEach(($link, index) =>{
      console.log($link);
      $link.addEventListener('click', e => this.eventHandler(e, index));

    })

    


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
