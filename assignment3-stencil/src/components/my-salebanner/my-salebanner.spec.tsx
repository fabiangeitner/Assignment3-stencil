import { newSpecPage } from '@stencil/core/testing';
import { MySalebanner } from './my-salebanner';

describe('my-salebanner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySalebanner],
      html: `<my-salebanner></my-salebanner>`,
    });
    expect(page.root).toEqualHtml(`
      <my-salebanner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-salebanner>
    `);
  });
});
