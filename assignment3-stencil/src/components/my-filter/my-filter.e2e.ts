import { newE2EPage } from '@stencil/core/testing';

describe('my-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-filter></my-filter>');

    const element = await page.find('my-filter');
    expect(element).toHaveClass('hydrated');
  });
});
