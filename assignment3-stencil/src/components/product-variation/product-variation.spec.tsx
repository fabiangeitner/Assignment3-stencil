import { newSpecPage } from '@stencil/core/testing';
import { ProductVariation } from './product-variation';

describe('product-variation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductVariation],
      html: `<product-variation></product-variation>`,
    });
    expect(page.root).toEqualHtml(`
      <product-variation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-variation>
    `);
  });
});
