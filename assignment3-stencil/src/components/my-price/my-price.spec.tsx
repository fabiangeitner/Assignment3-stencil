import { newSpecPage } from '@stencil/core/testing';
import { MyPrice } from './my-price';

describe('my-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPrice],
      html: `<my-price></my-price>`,
    });
    expect(page.root).toEqualHtml(`
      <my-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-price>
    `);
  });
});
