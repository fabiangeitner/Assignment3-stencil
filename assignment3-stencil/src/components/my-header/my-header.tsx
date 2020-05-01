import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true,
})
export class MyHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="headline">
            <p>A R N É E</p>
          </div>
          <div class="search">
            <img src="../Bilder/search.png" alt="Search" />
          </div>
        </div>
      </Host>
    );
  }
}
