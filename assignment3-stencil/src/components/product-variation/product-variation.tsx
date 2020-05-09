import { Component, ComponentInterface, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'product-variation',
  styleUrl: 'product-variation.css',
  shadow: true,
})

export class ProductVariation implements ComponentInterface {

  @Prop() color: string;
  @State() value: string;


  handleEinkauf() {
    console.log(this.color);

  }

  inputChanged(e) {
    const size = e.size as HTMLInputElement;
    console.log(size.value);
  }


  render() {
    return (
      <Host>
        <div id="container">
          <div class="color"><p>{this.color}</p></div>
          <div class="size">
            <select onChange={(e) => this.inputChanged(e)}>
              <option>Bitte Größe wählen</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
        <div id="addButton" onClick={() => this.handleEinkauf()}>
          <button>IN MEINE TASCHE</button>
        </div>

      </Host >
    );
  }

}
