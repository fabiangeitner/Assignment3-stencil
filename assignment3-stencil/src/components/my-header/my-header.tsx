import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true,
})
export class MyHeader implements ComponentInterface {
  showInput() {
    let inputfield = `<input id="searchInput" type="text" />`;
    console.log(inputfield);
  }

  render() {
    let inputfield = <input id="searchInput" type="text" />;
    return (
      <Host>
        <div class="wrapper">
          <div class="headline">
            <p>A R N É E</p>
          </div>
          <div class="search">
            {inputfield}
            <img
              src="../Bilder/search.png"
              alt="Search"
              onClick={() => {
                this.showInput();
              }}
            />
          </div>
        </div>
      </Host>
    );
  }
}
