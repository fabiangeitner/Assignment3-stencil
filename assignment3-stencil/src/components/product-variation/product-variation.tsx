import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'product-variation',
  styleUrl: 'product-variation.css',
  shadow: true,
})
export class ProductVariation implements ComponentInterface {

  @Prop() color: string;

  render() {
    return (
      <Host>
        <div id="container">
          <div class="color"><p>{this.color}</p></div>
          <div class="size">
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
        <div id="addButton">
          <button>IN MEINE TASCHE</button>
        </div>
      </Host>
    );
  }

}
