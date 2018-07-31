
class Fader {
  constructor() {
    window.addEventListener('scroll', this.onScroll, false);
    this.ticking = false;
    this.lastScrollY = 0;
    this.range = 400;
    this.element = '';
    this.elHeight = 0;
    this.offset = 0;
  }

  setElement(el) {
    this.element = el;
    this.elHeight = this.element.offsetHeight;
    this.offset = this.elHeight / 2;
  }

  /**
 * Callback for our scroll event - just
 * keeps track of the last scroll value.
 */
  onScroll() {
    this.lastScrollY = window.scrollY;
    this.requestTick();
  }

  /**
   * Calls rAF if it's not been done already.
   */
  requestTick() {
    if (!this.ticking) {
      requestAnimationFrame(this.fade);
      this.ticking = true;
    }
  }

  /**
   * Our animation callback.
   */
  update() {

    // allow further rAFs to be called
    this.ticking = false;
  }

  fade() {
    const calc = 1 - (this.lastScrollY - this.offset + this.range) / this.range;
    this.element.css({ 'opacity': calc });
  }
}

export default Fader;


