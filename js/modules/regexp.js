export default class ValidationEmail {
  constructor(input, boxOfInput, classeSpan, classeVisibilidade, contentSpan) {
    // users preferences
    this.getInputEmail = document.getElementById(input);
    this.getBoxContainEmail = document.querySelector(boxOfInput);
    this.classeSpan = classeSpan;
    this.classeVisibilidade = classeVisibilidade;
    this.contentSpan = contentSpan;
    // regexp for validation
    this.regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // redirecionamento com do this com o bind
    this.initValidationInput = this.initValidationInput.bind(this);
  }

  // method que retorna true ou false de acordo
  // com o match da regexp, email de acordo
  // com a regexp retorno true se não false
  validation(email) {
    this.match = email.match(this.regexp);
    return this.match && this.match[0] === email;
  }

  // method que cria o span de erro cria e coloca
  // logo a baixo do input de email. A partir do css
  // garantimos os estilos dele de acordo com sua classe.
  // E ele sempre começa com display de none, só tera
  // visibilidade, caso o email não de match com a regexp
  creatAlertOfErro() {
    this.span = document.createElement("span");
    this.span.classList.add(this.classeSpan);
    this.span.innerText = this.contentSpan;
    this.getBoxContainEmail.appendChild(this.span);
  }

  // method que pega o valor do email com o evento
  // de change, com esse valor é feita a verificação
  // com o retorno do method criado mais acima
  // deu true nada acontece caso de false, deixamos
  // um callback para mostrar o erro ao usuário
  initValidationInput(event) {
    this.email = event.target.value;
    if (this.validation(this.email)) {
      this.getBoxContainEmail.classList.remove(this.classeVisibilidade);
    } else {
      this.getBoxContainEmail.classList.add(this.classeVisibilidade);
    }
  }

  // add event ao input
  addEventInput() {
    this.getInputEmail.addEventListener("change", this.initValidationInput);
  }

  // method que inicia toda a classe
  init() {
    if (this.getInputEmail && this.getBoxContainEmail) {
      this.creatAlertOfErro();
      this.addEventInput();
    }
    return this;
  }
}
