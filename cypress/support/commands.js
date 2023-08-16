// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//


Cypress.Commands.add('clickMultipleTimes', (selector, text, numClicks) => {
  for (let i = 0; i < numClicks; i++) {
    cy.get(selector).contains(text).click();
  }
});
