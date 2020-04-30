import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'home-screen',
  styleUrl: 'home-screen.css',
  shadow: true,
})
export class HomeScreen implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="screen">
          <img src="../Bilder/homescreen.png" alt="Homebild" />
        </div>
      </Host>
    );
  }

}
