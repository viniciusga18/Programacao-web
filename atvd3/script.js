
let contador = 0;

const valor = document.getElementById("valor");
const btnMais = document.getElementById("incrementar");
const btnMenos = document.getElementById("decrementar");

btnMais.addEventListener("click", () => {
  contador++;
  valor.textContent = contador;
});

btnMenos.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    valor.textContent = contador;
  } else {
    alert("O contador já está em zero!");
  }
});

const inputTexto = document.getElementById("inputTexto");
const paragrafos = document.getElementById("paragrafos");
const contadorCaracteres = document.getElementById("contadorCaracteres");

inputTexto.addEventListener("keyup", (event) => {

  let texto = inputTexto.value.replace(/\s/g, "");
  contadorCaracteres.textContent = texto.length;

  if (event.key === "Enter" && inputTexto.value !== "") {
    let p = document.createElement("p");
    p.textContent = inputTexto.value;

    paragrafos.appendChild(p);

    inputTexto.value = "";
    contadorCaracteres.textContent = 0;
  }
});

const tipoLista = document.getElementById("tipoLista");
const btnLista = document.getElementById("addLista");
const listas = document.getElementById("listas");

btnLista.addEventListener("click", () => {
  let tipo = tipoLista.value;

  let lista = document.createElement(tipo);

  let item = document.createElement("li");
  item.textContent = "Novo item";

  lista.appendChild(item);
  listas.appendChild(lista);
});

const btnReset = document.getElementById("reset");

btnReset.addEventListener("click", () => {
  contador = 0;
  valor.textContent = 0;

  paragrafos.innerHTML = "";
  listas.innerHTML = "";

  inputTexto.value = "";
  contadorCaracteres.textContent = 0;
});