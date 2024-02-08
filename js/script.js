const button = document.querySelector(".button-add");
const alimento = document.querySelector(".input-ref");
const calorias = document.querySelector(".input-cal");
const peso = document.querySelector(".input-peso");
const listaItens = document.querySelector(".list");

let minhaLista = [];

function pegarValor() {
  minhaLista.push(`${alimento.value} ${peso.value}Gr ${calorias.value}Kcal`);

  alimento.value = "";
  peso.value = "";
  calorias.value = "";

  mostrarItem();
  salvarLista();
}

function mostrarItem() {
  let novoItem = "";

  minhaLista.forEach((item, index) => {
    novoItem += `
      <li class="unidade">
        <p>${item}</p>
        <img src="/image/delete2.png" alt="" onclick="deletarItem(${index})">
      </li>
    `;
  });

  listaItens.innerHTML = novoItem;
}

function deletarItem(index) {
  minhaLista.splice(index, 1);
  mostrarItem();
  salvarLista();
}

function salvarLista() {
  localStorage.setItem("lista", JSON.stringify(minhaLista));
}

function recarregarItem() {
  const itemLocalStorage = localStorage.getItem("lista");

  if (itemLocalStorage) {
    minhaLista = JSON.parse(itemLocalStorage);
  }
  mostrarItem();
}

recarregarItem();

button.addEventListener("click", pegarValor);
