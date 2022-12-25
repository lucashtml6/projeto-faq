const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const openItem = document.querySelector(".show"); // Item que já estiver aberto
    
    // para esconder o que estiver aberto (na primeira vez, não entrará nessa condição, pois nenhum item vai estar ativo)
    if(openItem) {
      openItem.classList.remove("show");
    }

    // se não existir nenhum item ativo, ele apenas ativa o item clicado
    item.classList.add("show");

    // para quando clicar em um item que estiver aberto
    if(item === openItem) { 
      item.classList.remove("show");
    }
  });
});