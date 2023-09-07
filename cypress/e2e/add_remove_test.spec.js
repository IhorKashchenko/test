///<reference types="cypress" />

const numOfClicks = 40;

describe("Testing add_remove_elements page", () => {
  beforeEach("Navigating to the test page", () => {
    cy.visit("/add_remove_elements/");
  });

  it.only("Adding Elements", () => {
    //Verify that Add Element button is visible
    cy.get("button").contains("Add Element").should("be.visible");
    // Verify that there are no elements on the page
    cy.get("#elements").should("exist").and("not.be.visible");
    // Click n number of times
    cy.clickMultipleTimes("button", "Add Element", numOfClicks);
    cy.get("#elements button.added-manually").should(
      "have.length",
      numOfClicks
    );
    //Deleting elements using different approach
    cy.get("#elements button.added-manually").each(($button) => {
      // Click each button
      cy.wrap($button).click();
    });
    // Verify that there are no elements on the page after deleting all of them
    cy.get("#elements").should("exist").and("not.be.visible");
  });
});
