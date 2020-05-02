import { newSpecPage } from '@stencil/core/testing';
import { MyDescription } from './my-description';

describe('my-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDescription],
      html: `<my-description></my-description>`,
    });
    expect(page.root).toEqualHtml(`
      <my-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-description>
    `);
  });
});
