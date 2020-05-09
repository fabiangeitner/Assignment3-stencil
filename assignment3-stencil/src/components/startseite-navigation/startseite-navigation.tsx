import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "startseite-navigation",
  styleUrl: "startseite-navigation.css",
  shadow: true,
})

export class StartseiteNavigation implements ComponentInterface {
  private handleHome(e) {
    return e.currentTarget.classList.toggle("changeHome");
  }

  private handleCloth(e) {
    return e.currentTarget.classList.toggle("changeCloth");
  }

  private handleHeart(e) {
    return e.currentTarget.classList.toggle("changeHeart");
  }

  private handleBag(e) {
    return e.currentTarget.classList.toggle("changeBag");
  }

  private handleUser(e) {
    return e.currentTarget.classList.toggle("changeUser");
  }

  render() {
    return (
      <Host>
        <div class="nav">
          <ul>
            <li onClick={(e) => this.handleHome(e)}>
              <a href="index.html">
                <img src="../Bilder/home-run.png" alt="Home" />
              </a>
            </li>
            <li onClick={(e) => this.handleCloth(e)}>
              <a href="productlist.html">
                <img src="../Bilder/cloth.png" alt="T-shirt" />
              </a>
            </li>
            <li onClick={(e) => this.handleHeart(e)}>
              <a href="#">
                <img src="../Bilder/heart.png" alt="Favoriten" />
              </a>
            </li>
            <li onClick={(e) => this.handleBag(e)}>
              <a href="#">
                <img src="../Bilder/bag.png" alt="Einkaufstasche" />
              </a>
            </li>
            <li onClick={(e) => this.handleUser(e)}>
              <a href="#">
                <img src="../Bilder/user.png" alt="Konto" />
              </a>
            </li>
          </ul>
        </div>
      </Host>
    );
  }
}
