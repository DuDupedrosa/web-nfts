export default class MenuMobile {
  constructor(button, menu, icon, classe) {
    // user preferences
    this.button = document.querySelector(button);
    this.menuNav = document.querySelector(menu);
    this.menuIcon = document.querySelector(icon);
    this.classe = classe;
    // no user preferences
    this.events = ["touchstart", "click"];
    this.attribute = "data-close";

    this.onMenu = this.onMenu.bind(this);
  }

  // method que verifica se a imagem possui um atributo
  // ela sempre começa sem, então já trocamos o src para
  // aparecer o ícone do x, quando ocorre o clique novamente,
  // ela está com a atributo e vai para o else, voltando o src
  // para o icon do menu...
  changeIconOfMenu(elemento) {
    if (!elemento.hasAttribute(this.attribute)) {
      elemento.setAttribute(this.attribute, "");
      elemento.setAttribute("src", "./img/icons/close-menu.svg");
    } else {
      elemento.removeAttribute(this.attribute, "");
      elemento.setAttribute("src", "./img/icons/menu-hamburguer.svg");
    }
  }

  // method de callback do event de click
  // da o toggle e ativa o função para trocar
  // o icone do menu para o x.
  onMenu(event) {
    event.preventDefault();
    this.menuNav.classList.toggle(this.classe);
    this.changeIconOfMenu(this.menuIcon);
  }

  // add event
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onMenu);
    });
  }

  // method que inicia a funcionalidade
  init() {
    if (this.button && this.menuNav) {
      this.addEventButton();
    }
    return this;
  }
}
