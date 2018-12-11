import { newE2EPage } from '@stencil/core/testing';

describe('share-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<share-button></share-button>');
    const element = await page.find('share-button');
    expect(element).toHaveClass('hydrated');
  });
});
