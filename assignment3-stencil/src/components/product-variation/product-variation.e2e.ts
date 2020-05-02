import { newE2EPage } from '@stencil/core/testing';

describe('product-variation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<product-variation></product-variation>');

    const element = await page.find('product-variation');
    expect(element).toHaveClass('hydrated');
  });
});
