import { newE2EPage } from '@stencil/core/testing';

describe('my-salebanner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-salebanner></my-salebanner>');

    const element = await page.find('my-salebanner');
    expect(element).toHaveClass('hydrated');
  });
});
