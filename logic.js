
const um = document.getElementById("bolinha1");
const dois = document.getElementById("bolinha2");
const tres = document.getElementById("bolinha3");
const quatro = document.getElementById("bolinha4");
const cinco = document.getElementById("bolinha5");


um.valor = 1;
dois.valor = 2;
tres.valor = 3;
quatro.valor = 4;
cinco.valor = 5;


let selecionada = null;


function selecionar(bolinha) {
  if (bolinha === selecionada) {               
    bolinha.classList.remove("selecionada");
    selecionada = null;
    console.log("Nenhuma bolinha selecionada.");
  } else {                                    
    if (selecionada) selecionada.classList.remove("selecionada");
    bolinha.classList.add("selecionada");
    selecionada = bolinha;
    console.log(`Escolhida: ${bolinha.valor}`);
  }
}

um.addEventListener("click", () => selecionar(um));
dois.addEventListener("click", () => selecionar(dois));
tres.addEventListener("click", () => selecionar(tres));
quatro.addEventListener("click", () => selecionar(quatro));
cinco.addEventListener("click", () => selecionar(cinco));