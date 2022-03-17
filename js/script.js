import MenuMobile from "./modules/menu-mobile.js";
import NavegacaoSuave from "./modules/navegacao-suave.js";
import ValidationEmail from "./modules/regexp.js";

// classe que da a interatividade ao menu mobile
const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="nav"]',
  '[data-menu="img"]',
  "active-menu"
);
menuMobile.init();

// classe que da funcionalidade a um scroll suave
// quando ocorre o click dos links de navegação interna
const navegacaoSuave = new NavegacaoSuave('[data-navegacao="link"]', {
  behavior: "smooth",
  block: "start",
});
navegacaoSuave.init();

// classe que faz a verificação do email a partir de uma regexp
const validationEmail = new ValidationEmail(
  "email",
  "[data-email]",
  "erro",
  "active-erro",
  "Digite um email válido"
);
validationEmail.init();
