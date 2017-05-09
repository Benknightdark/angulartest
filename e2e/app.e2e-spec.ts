import { Ng4webapiPage } from './app.po';

describe('ng4webapi App', () => {
  let page: Ng4webapiPage;

  beforeEach(() => {
    page = new Ng4webapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
