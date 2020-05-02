import { newSpecPage } from '@stencil/core/testing';
import { MyFilter } from './my-filter';

describe('my-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFilter],
      html: `<my-filter></my-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <my-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-filter>
    `);
  });
});
