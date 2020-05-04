import { Component, ComponentInterface, Host, h, State } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true,
})
export class MyHeader implements ComponentInterface {
  @State() inputSearch!: HTMLInputElement;

  showhideInput() {
    this.inputSearch.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        // console.log(this.inputSearch.value);

        console.log("suchen");
      }
    });
    if (this.inputSearch.style.display == "none") {
      this.inputSearch.style.display = "block";
    } else {
      this.inputSearch.style.display = "none";
    }
  }

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="headline">
            <p>A R N É E</p>
          </div>
          <div class="search">
            <img
              src="../Bilder/search.png"
              alt="Search"
              onClick={() => this.showhideInput()}
            />
            <input
              id="searchInput"
              ref={(el) => (this.inputSearch = el as HTMLInputElement)}
              type="text"
            />
          </div>
        </div>
      </Host>
    );
  }
}
