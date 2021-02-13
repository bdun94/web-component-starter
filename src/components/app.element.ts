import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('app-element')
export class AppElement extends LitElement {

	static get styles() {
		return css`
			.main {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		`;
	}

  render(): TemplateResult {
    return html`
      <header>
        <h1>New Typescript Web Component App</h1>
      </header>
      <main class="main">
        <h1>App Starter</h1>
        <p>Typescript Example Starter App</p>
				<img src="assets/logo-192x192.png" alt="tree" />
      </main>
    `;
  }
}
