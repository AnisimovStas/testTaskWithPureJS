class header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="header">
      <a href="https://github.com/AnisimovStas/testTaskWithPureJS" target="_blank" class="logo">Анисимов С.А.</a>
      <div class="header-right">
        <a class="header-right" href="https://github.com/AnisimovStas/testTaskWithPureJS" target="_blank" >GitHub link</a>
        <a class="header-right" href="https://t.me/otpbard" target="_blank" >Telegram link</a>
      </div>
    </div>

      `;
  }
}

customElements.define("header-component", header);
