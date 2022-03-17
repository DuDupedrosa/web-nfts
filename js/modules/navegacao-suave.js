export default class NavegacaoSuave {
  constructor(link, options) {
    // users preferences
    this.getLink = document.querySelectorAll(link);
    this.options = options;
    // no users preferences
    this.events = ["touchstart", "click"];
    this.onNavSuave = this.onNavSuave.bind(this);
  }

  // method que pega o href do link que faz a busca
  // via id com a section, após feito isso, o padrão
  // prevenido e na section referente ao seu id usamos
  // o method que deixa o scroll suave
  onNavSuave(event) {
    event.preventDefault();
    this.href = event.currentTarget.getAttribute("href");
    this.section = document.querySelector(this.href);
    this.section.scrollIntoView(this.options);
  }

  // add events
  addEventLink() {
    this.events.forEach((evento) => {
      this.getLink.forEach((link) => {
        link.addEventListener(evento, this.onNavSuave);
      });
    });
  }

  // method de init da funcionalidade
  init() {
    if (this.getLink) {
      this.addEventLink();
    }
    return this;
  }
}
