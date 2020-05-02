import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "my-price",
  styleUrl: "my-price.css",
  shadow: true,
})
export class MyPrice implements ComponentInterface {
  @Prop() price: string;

  render() {
    return (
      <Host>
        <p> Preis: {this.price}</p>
      </Host>
    );
  }
}
