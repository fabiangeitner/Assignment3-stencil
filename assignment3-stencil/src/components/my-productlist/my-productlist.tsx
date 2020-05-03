import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "my-productlist",
  styleUrl: "my-productlist.css",
  shadow: true,
})
export class MyProductlist implements ComponentInterface {
  @Prop() name: string;

  render() {
    let source = this.name;
    return (
      <Host>
        <div class="background">
          <img src="../Bilder/heart.png" alt="heart" id="heart"></img>
          <img src={source} alt="product-image" />
          <p id="product-name">
            <slot></slot>
          </p>
        </div>
      </Host>
    );
  }
}
