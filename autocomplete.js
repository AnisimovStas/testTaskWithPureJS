class main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          
        <main>
        <h3>Компания или ИП</h3>
        <input type="text" class="input" id="input"  placeholder="Введите название компании" onkeydown="LoadQuery()" onkeyup="renderArray()"  >
        <div class="result"></div>
        <div class="infoBox">
        <p class="infolabel">Краткое наименование
         </p>
        <div class="infoArea" id="shortName"> some value </div>

        <p class="infolabel">Полное наименование</p>
        <div class="infoArea" id="fullName">Some value</div>

        <p class="infolabel"> ИНН / КПП</p>
        <div class="infoArea"id="inn">some value</div>

        <p class="infolabel"> Адрес </p>
        <div class="infoArea" id="adress"> some value</div>
        </div>
        </main>
      `;
  }
}

customElements.define("header-component", main);
