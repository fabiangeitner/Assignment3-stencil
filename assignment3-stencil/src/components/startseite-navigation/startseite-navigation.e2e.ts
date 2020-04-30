import { newE2EPage } from '@stencil/core/testing';

describe('startseite-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<startseite-navigation></startseite-navigation>');

    const element = await page.find('startseite-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
