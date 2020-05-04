import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'my-description',
  styleUrl: 'my-description.css',
  shadow: true,
})
export class MyDescription implements ComponentInterface {

  @State() description!: HTMLElement;

  beschreibung(e: UIEvent) {
    let img = e.target as HTMLElement;
    if (this.description.style.display == 'none') {
      this.description.style.display = 'block';
      img.style.display = 'none';
    } else {
      this.description.style.display = 'none';
      img.style.display = 'block';
    };
  }

  render() {
    return (
      <Host>
        <p onClick={(event: UIEvent) => this.beschreibung(event)}>Details anzeigen</p>
        <div id="wrapper" ref={(el) => this.description = el as HTMLElement}>
          <h1>Beschreibung:</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
      </Host>
    );
  }

}
