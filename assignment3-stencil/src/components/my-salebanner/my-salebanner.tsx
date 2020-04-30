import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'my-salebanner',
  styleUrl: 'my-salebanner.css',
  shadow: true,
})
export class MySalebanner implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="sale">
          <p1>Nur heute!</p1> <br /> <br />
          <p2>25 % auf einen Artikel deiner Wahl</p2>
        </div>
      </Host>
    );
  }

}
