import { newE2EPage } from '@stencil/core/testing';

describe('home-screen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-screen></home-screen>');

    const element = await page.find('home-screen');
    expect(element).toHaveClass('hydrated');
  });
});
