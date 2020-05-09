import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "my-productlist",
  styleUrl: "my-productlist.css",
  shadow: true,
})
export class MyProductlist implements ComponentInterface {
  @Prop() name: string;

  private handleHeart(e: any) {
    return e.currentTarget.classList.toggle("changeHeart");
  }

  render() {
    return (
      <Host>
        <div class="background">
          <div id="heart">
            <img onClick={(e) => this.handleHeart(e)} src="../Bilder/heart.png" alt="heart"></img>
          </div>
          <a href="detailseite.html">
            <img src={this.name} alt="product-image" />
          </a>
          <p id="product-name">
            <slot></slot>
          </p>
        </div>
      </Host>
    );
  }
}
