/// <reference types="Cypress" />

describe('login test', () => {
    it.only('login with valid credentials', () => {
        cy.visit('/login')
        cy.url().should('include', '/login');
        cy.get('#email').type('gugagaga@gmail.com');
        cy.get('#password').type('gugagaga1');
        cy.get('button[type="submit"]').click();
    })

    it('logout', () => {
        cy.get("a[class='nav-link nav-buttons']").should('have.length', 3);
        cy.get("a[class='nav-link nav-buttons']").eq(2).click();
    });
})