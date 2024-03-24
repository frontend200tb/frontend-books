class FrontBooks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <h1>Моя библиотека frontend книг</h1>
    `;
    this.className = 'front-books';
  }
}

customElements.define('front-books', FrontBooks);
