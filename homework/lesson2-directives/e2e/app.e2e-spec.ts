import { Lesson2DirectivesPage } from './app.po';

describe('lesson2-directives App', () => {
  let page: Lesson2DirectivesPage;

  beforeEach(() => {
    page = new Lesson2DirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
