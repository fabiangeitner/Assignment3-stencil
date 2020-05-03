import { newSpecPage } from '@stencil/core/testing';
import { MyProductlist } from './my-productlist';

describe('my-productlist', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProductlist],
      html: `<my-productlist></my-productlist>`,
    });
    expect(page.root).toEqualHtml(`
      <my-productlist>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-productlist>
    `);
  });
});
