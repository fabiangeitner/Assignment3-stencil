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
          <p class="headline">A R N É E</p>
        </div>
      </Host>
    );
  }
}
