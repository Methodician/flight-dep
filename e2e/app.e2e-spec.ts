import { FlightPage } from './app.po';

describe('flight App', function() {
  let page: FlightPage;

  beforeEach(() => {
    page = new FlightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
