import { LitElement, html, css } from 'lit';

export class RestaurantCard extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }
  static get styles() {
    return css`
    .card {
      width: 420px;
      margin: 0 auto;
      border: 1px solid;
      padding: 10px;
      text-align: center;
      background-color: rgb(232, 123, 123);
    }

    @media screen and (max-width: 800px) {
    display: inline-block;
  }

@media screen and (max-width: 500px) {
  .card {
    max-width: 300px;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
}

  `;
  }
  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}

customElements.define('restaurant-card', RestaurantCard);