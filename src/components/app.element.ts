import { customElement, html, LitElement } from "lit-element";

@customElement('app-element')
export class AppElement extends LitElement {
	
	render() {
		return html`
			<header>
				<h1>New Typescript Web Component App</h1>
			</header>
			<main>
				<h1>App Starter</h1>
				<p>Typescript Example Starter App</p>
			</main>
		`
	}
}