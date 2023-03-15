class inputCompany extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <main>
        <h3>Компания или ИП</h3>
        <input type="text" class="input" id="input"  placeholder="Введите название компании" onkeydown="LoadQuery()" oncahnge="showSuggestings()" onkeyup="renderArray()"  >
        <div class="result"></div>
       
        </main>
      `;
  }
}

customElements.define("input-component", inputCompany);
