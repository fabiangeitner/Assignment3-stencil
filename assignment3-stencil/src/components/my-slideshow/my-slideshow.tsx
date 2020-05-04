import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'my-slideshow',
  styleUrl: 'my-slideshow.css',
  shadow: true,
})
export class MySlideshow implements ComponentInterface {

  @State() firstSlide!: HTMLElement;
  @State() secondSlide!: HTMLElement;
  @State() thirdSlide!: HTMLElement;

  hideSlides() {
    this.firstSlide.style.display = 'none';
    this.secondSlide.style.display = 'none';
    this.thirdSlide.style.display = 'none';
  }

  dotsChangeSlides(id: string) {
    this.hideSlides();
    switch (id) {
      case '1':
        this.firstSlide.style.display = 'block';
        break;
      case '2':
        this.secondSlide.style.display = 'block';
        break;
      case '3':
        this.thirdSlide.style.display = 'block';
        break;
      default:
        console.log("Something went wrong with your dots!");
        break;
    }
  }

  render() {
    return (
      <Host>
        <div id="slideshow">
          <img src='../Bilder/Bild_1.1.png' alt='green-tshirt1'
            ref={(el) => this.firstSlide = el as HTMLElement} id='first'>
          </img>
          <img src='../Bilder/Bild_1.2.png' alt='green-tshirt1'
            ref={(el) => this.secondSlide = el as HTMLElement}>
          </img>
          <img src='../Bilder/Bild_1.3.png' alt='green-tshirt1'
            ref={(el) => this.thirdSlide = el as HTMLElement}>
          </img>
          <div>
            <span class="dot" onClick={() => this.dotsChangeSlides('1')}></span>
            <span class="dot" onClick={() => this.dotsChangeSlides('2')}></span>
            <span class="dot" onClick={() => this.dotsChangeSlides('3')}></span>
          </div>
        </div>

      </Host>
    );
  }

}
