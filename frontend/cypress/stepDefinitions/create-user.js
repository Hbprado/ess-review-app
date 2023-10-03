const {Given, When, Then, And } = require("cypress-cucumber-preprocessor");

Given("estou na página de cadastro", () => {
  cy.visit("/auth/signup");
});

When("preencho os campos username {string}, email {string} e senha {string}", (username, email, senha) => {
  cy.get("#username").type("hbp")
  cy.get("#email").type("hbp@cin.ufpe.br")
  cy.get("#password").type("123")
});

And("seleciono a opção {string}", (opcao) => {
  cy.get("#registerButton").click();
});

Then("sou direcionado para a página de login", () => {
  cy.url().should("include", "auth/signin")
});

Given("estou na página de login", () => {
    cy.visit("/auth/signin");
});

When("preencho os campos username {string}, email {string} e senha {string}", (username, email, senha) => {
    cy.get("#username").type("hbp")
    cy.get("#email").type("hbp@cin.ufpe.br")
    cy.get("#password").type("123")
});

And("seleciono a opção {string}", (opcao) => {
    cy.get("#loginButton").click();
});

And("sou direcionado para a página a home", () => {
    cy.url().should("include", "home/:id")
});
