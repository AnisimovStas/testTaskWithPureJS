let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
let token = "189d931cae87a0d3c85615be95de71993c5845cb";
let queryCompany;
const suggestionCompanies = [];
let selectedCompany;

input.oninput = function () {
  queryCompany = input.value;
  if (!input.value) {
    result.style.display = "none";
  } else {
    result.style.display = "block";
  }
};
// загрузка списка подходящих компаний
async function LoadQuery() {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: queryCompany }),
  });
  const data = await response.json();
  if (data.suggestions.length > 0) {
    suggestionCompanies.length = 0;
    data.suggestions.forEach((suggestion) => {
      suggestionCompanies.push(suggestion.data.name.full_with_opf);
    });
  } else {
    suggestionCompanies.length = 0;
    if (queryCompany.length > 1) {
      suggestionCompanies.push("Таких компаний не найдено");
    }
  }
}

async function fetchCompany(query) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  });
  selectedCompany = await response.json();
}
