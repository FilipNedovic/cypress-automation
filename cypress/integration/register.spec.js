/// <reference types="Cypress" />

describe('test register', () => {

    it('register without first name', () => {
        cy.visit('/register'); 
        cy.url().should('include', '/register');
        cy.get('#last-name').type('Nedovic');
        cy.get('#email').type('test3@mail.com');
        cy.get('#password').type('Test12345!');
        cy.get('#password-confirmation').type('Test12345!');
        cy.get(":checkbox").check();
        cy.get('button').click();
        cy.url().should('not.include', '/register');
    })
    
    it('register with valid data', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Filip');
        cy.get('#last-name').type('Nedovic');
        cy.get('#email').type('test3@mail.com');
        cy.get('#password').type('Test12345!');
        cy.get('#password-confirmation').type('Test12345!');
        cy.get(":checkbox").check();
        cy.get('button').click();
        cy.url().should('not.include', '/register');
    })
})