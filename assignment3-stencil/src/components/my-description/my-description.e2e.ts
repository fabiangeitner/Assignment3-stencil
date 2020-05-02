import { newE2EPage } from '@stencil/core/testing';

describe('my-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-description></my-description>');

    const element = await page.find('my-description');
    expect(element).toHaveClass('hydrated');
  });
});
