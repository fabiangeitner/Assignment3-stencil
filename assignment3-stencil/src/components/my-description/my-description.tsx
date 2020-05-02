import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'my-description',
  styleUrl: 'my-description.css',
  shadow: true,
})
export class MyDescription implements ComponentInterface {

  render() {
    return (
      <Host>
        <div id="wrapper">
          <h1>Beschreibung:</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
      </Host>
    );
  }

}
