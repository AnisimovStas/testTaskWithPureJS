class companyInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="infoBox">
      <p class="infolabel">Краткое наименование
       </p>
      <div class="infoArea" id="shortName"> &nbsp; </div>

      <p class="infolabel">Полное наименование</p>
      <div class="infoArea" id="fullName">&nbsp;</div>

      <p class="infolabel"> ИНН / КПП</p>
      <div class="infoArea"id="inn">&nbsp;</div>

      <p class="infolabel"> Адрес </p>
      <div class="infoArea" id="adress"> &nbsp;</div>
      </div>
      
      `;
  }
}

customElements.define("company-component", companyInfo);
