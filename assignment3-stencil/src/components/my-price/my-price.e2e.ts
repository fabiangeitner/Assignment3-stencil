import { newE2EPage } from '@stencil/core/testing';

describe('my-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-price></my-price>');

    const element = await page.find('my-price');
    expect(element).toHaveClass('hydrated');
  });
});
