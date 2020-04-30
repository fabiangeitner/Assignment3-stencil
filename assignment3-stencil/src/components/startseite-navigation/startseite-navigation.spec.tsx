import { newSpecPage } from '@stencil/core/testing';
import { StartseiteNavigation } from './startseite-navigation';

describe('startseite-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StartseiteNavigation],
      html: `<startseite-navigation></startseite-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <startseite-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </startseite-navigation>
    `);
  });
});
