import { Angular2AppAllPage } from './app.po';

describe('angular2-app-all App', () => {
  let page: Angular2AppAllPage;

  beforeEach(() => {
    page = new Angular2AppAllPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
