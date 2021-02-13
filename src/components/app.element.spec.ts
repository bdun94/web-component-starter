import { AppElement } from './app.element';

describe('AppElement', () => {
  let app: AppElement;

  beforeEach(() => {
    app = new AppElement();
  });

  it('should create successfully', () => {
    expect(app).toBeTruthy();
  });

  it('should have a greeting', () => {
    app.connectedCallback();
		console.log(app.shadowRoot?.querySelector('h1'));

    expect(app.querySelector('h1')?.innerHTML).toEqual(
      'Welcome to web-components!'
    );
  });
});
