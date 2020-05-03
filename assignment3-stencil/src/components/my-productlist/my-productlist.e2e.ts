import { newE2EPage } from '@stencil/core/testing';

describe('my-productlist', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-productlist></my-productlist>');

    const element = await page.find('my-productlist');
    expect(element).toHaveClass('hydrated');
  });
});
