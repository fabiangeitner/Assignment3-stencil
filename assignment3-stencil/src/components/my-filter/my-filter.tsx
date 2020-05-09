import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "my-filter",
  styleUrl: "my-filter.css",
  shadow: true,
})
export class MyFilter implements ComponentInterface {
  private selectCategory(e) {
    return e.currentTarget.classList.toggle("change");
  }

  render() {
    return (
      <Host>
        <div class="popUp">
          <div class="header">
            <a href="productlist.html" class="cancel">
              <span></span>
              <span></span>
            </a>
            <h1>Filtern</h1>
          </div>
          <div
            class="category"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>kurzarm Shirts</p>
          </div>
          <div
            class="category"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>langarm Shirts</p>
          </div>
          <div
            class="category"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>Tank Top Shirts</p>
          </div>
          <div
            class="category"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>Basic Shirts</p>
          </div>
          <div
            class="category"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>Shirts mit Muster</p>
          </div>
          <div
            class="btn-filter"
            onClick={(e) => {
              this.selectCategory(e);
            }}
          >
            <p>Artikel ansehen</p>
          </div>
        </div>
      </Host>
    );
  }
}
