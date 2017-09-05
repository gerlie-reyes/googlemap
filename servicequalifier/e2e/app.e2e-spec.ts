import { ServicequalifierPage } from './app.po';

describe('servicequalifier App', () => {
  let page: ServicequalifierPage;

  beforeEach(() => {
    page = new ServicequalifierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
