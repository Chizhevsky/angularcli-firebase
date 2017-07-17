import { AngularcliFirebasePage } from './app.po';

describe('angularcli-firebase App', () => {
  let page: AngularcliFirebasePage;

  beforeEach(() => {
    page = new AngularcliFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
