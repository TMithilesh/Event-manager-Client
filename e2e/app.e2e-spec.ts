import { EventManagerClientPage } from './app.po';

describe('event-manager-client App', () => {
  let page: EventManagerClientPage;

  beforeEach(() => {
    page = new EventManagerClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
