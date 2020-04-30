import { newSpecPage } from '@stencil/core/testing';
import { HomeScreen } from './home-screen';

describe('home-screen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomeScreen],
      html: `<home-screen></home-screen>`,
    });
    expect(page.root).toEqualHtml(`
      <home-screen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-screen>
    `);
  });
});
