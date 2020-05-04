import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true,
})
export class MyHeader implements ComponentInterface {
  //@State() showing: boolean;
  //@Listen("click", { capture: true })

  inputSearch!: HTMLElement;
  showhideInput() {
    if (this.inputSearch.style.display == "none") {
      this.inputSearch.style.display = "block";
    } else {
      this.inputSearch.style.display = "none";
    }
    //this.showing = !this.showing;
  }

  render() {
    //let inputfield = <input id="searchInput" type="text" />;
    return (
      <Host>
        <div class="wrapper">
          <div class="headline">
            <p>A R N É E</p>
          </div>
          <div class="search">
            <input
              id="searchInput"
              ref={(el) => (this.inputSearch = el as HTMLElement)}
              type="text"
            />

            <img
              src="../Bilder/search.png"
              alt="Search"
              onClick={() => {
                this.showhideInput();
              }}
            />
          </div>
        </div>
      </Host>
    );
  }
}
