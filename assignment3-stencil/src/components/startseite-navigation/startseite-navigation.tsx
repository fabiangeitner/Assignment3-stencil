import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'startseite-navigation',
  styleUrl: 'startseite-navigation.css',
  shadow: true,
})
export class StartseiteNavigation implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="nav">
          <ul>
            <li><a href="#"><img src="../Bilder/home-run.png" alt="Home" /></a></li>
            <li><a href="#"><img src="../Bilder/cloth.png" alt="T-shirt" /></a></li>
            <li><a href="#"><img src="../Bilder/heart.png" alt="Favoriten" /></a></li>
            <li><a href="#"><img src="../Bilder/bag.png" alt="Einkaufstasche" /></a></li>
            <li><a href="#"><img src="../Bilder/user.png" alt="Konto" /></a></li>
          </ul>
        </div>

      </Host>
    );
  }

}
