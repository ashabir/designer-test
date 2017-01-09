import { InviteManagerAngular2Page } from './app.po';

describe('invite-manager-angular2 App', function() {
  let page: InviteManagerAngular2Page;

  beforeEach(() => {
    page = new InviteManagerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
