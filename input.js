let result = document.querySelector(".result");

function renderArray() {
  while (result.hasChildNodes()) {
    result.removeChild(result.firstChild);
  }
  let id = 0;
  suggestionCompanies.forEach((company) => {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "company");
    id++;
    div.innerHTML = company;
    result.appendChild(div);
  });
}

function hanler() {
  document.querySelector("#input").value = "";
  for (var i = 0; i < 10; ) {
    result.removeChild(document.querySelector(".company"));
  }
}

document.body.addEventListener("click", async function (event) {
  let id = event.target.id;
  if (((id) => 0) && id < 10) {
    queryCompany = document.getElementById(id).innerText;
    await fetchCompany(queryCompany);
    document.getElementById("shortName").innerHTML =
      selectedCompany.suggestions[0].data.name.short_with_opf;

    document.getElementById("fullName").innerHTML =
      selectedCompany.suggestions[0].data.name.full_with_opf;

    document.getElementById("inn").innerHTML =
      selectedCompany.suggestions[0].data.inn +
      " / " +
      selectedCompany.suggestions[0].data.kpp;

    document.getElementById("adress").innerHTML =
      selectedCompany.suggestions[0].data.address.unrestricted_value;
    hanler();
  }
});
