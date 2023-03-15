let result = document.querySelector(".result");

function renderArray() {
  // Удаляем прошлые значения при вводе данных
  while (result.hasChildNodes()) {
    result.removeChild(result.firstChild);
  }
  let id = 0;
  // Обновление списка предположений
  suggestionCompanies.forEach((company) => {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "company");
    id++;
    div.innerHTML = company;
    result.appendChild(div);
  });
}
// Удаление предположений
function hanler() {
  document.querySelector("#input").value = "";
  for (var i = 0; i < suggestionCompanies.length; ) {
    result.removeChild(document.querySelector(".company"));
  }
}
// Добавление события при клике на компанию из списка предложеных
document.body.addEventListener("click", async function (event) {
  let id = event.target.id;
  if (((id) => 0) && id < suggestionCompanies.length) {
    if (document.getElementById(id).innerText != "") {
      queryCompany = document.getElementById(id).innerText;
      //Запрос данных для выбранной компании
      await fetchCompany(queryCompany);
      // Заполнение поля данными
      document.getElementById("shortName").innerHTML =
        selectedCompany.suggestions[0].data.name.short_with_opf;

      document.getElementById("fullName").innerHTML =
        selectedCompany.suggestions[0].data.name.full_with_opf;
      //У ИП при запросе КПП появляется undefined, в этом случае КПП заменяется на ОГРН
      if (selectedCompany.suggestions[0].data.kpp) {
        document.getElementById("inn").innerHTML =
          selectedCompany.suggestions[0].data.inn +
          " / " +
          selectedCompany.suggestions[0].data.kpp;
      } else {
        document.getElementById("inn").innerHTML =
          selectedCompany.suggestions[0].data.inn +
          " / " +
          selectedCompany.suggestions[0].data.ogrn;
      }

      document.getElementById("adress").innerHTML =
        selectedCompany.suggestions[0].data.address.unrestricted_value;
    }
    //Вызов удаления предложенных компаний
    hanler();
  }
});
