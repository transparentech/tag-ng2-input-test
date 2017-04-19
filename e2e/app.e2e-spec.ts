import { TagNg2InputTestPage } from './app.po';

describe('tag-ng2-input-test App', () => {
  let page: TagNg2InputTestPage;

  beforeEach(() => {
    page = new TagNg2InputTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
