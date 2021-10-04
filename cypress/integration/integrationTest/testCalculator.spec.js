/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('testing with all operations', () => {
  beforeEach(() => {
    cy.visit('https://calculator-react-big-js.vercel.app')
  })

  it('testing Addition.', () => {
    cy.get('.wide > button').click()
    cy.get(':nth-child(5) > :nth-child(2) > button').click()
    cy.get('.component-button-panel > :nth-child(4) > :nth-child(1) > button').click()
    cy.get(':nth-child(4) > .orange > button').click()
    cy.get('.wide > button').click()
    cy.get(':nth-child(5) > :nth-child(2) > button').click()
    cy.get(':nth-child(4) > :nth-child(2) > button').click()
    cy.get(':nth-child(5) > .orange > button').click()
    cy.get('.component-display > div').should('contain', '0.3')
    cy.get(':nth-child(1) > :nth-child(1) > button').click()
  })

  it('testing subtraction', () => {
    cy.get('.wide > button').click()
    cy.contains('button', ".").click()
    cy.get(':nth-child(4) > :nth-child(3) > button').click()
    cy.get(':nth-child(3) > .orange > button').click()
    cy.get('.wide > button').click()
    cy.get(':nth-child(5) > :nth-child(2) > button').click()
    cy.get('.component-button-panel > :nth-child(4) > :nth-child(1) > button').click()
    cy.contains('button', "=").click()
    cy.get('.component-display > div').should('contain', '0.2')
    cy.contains('button', "AC").click()
    cy.reload()
  })
  it('testing multiplication', () => {
    cy.get(':nth-child(4) > :nth-child(3) > button').click().click().click().click().click()
    cy.get(':nth-child(2) > .orange > button').click()
    cy.contains('button', "9").click().click()
    cy.contains('button', "=").click()
    cy.get('.component-display > div').should('contain', '3299967')
    cy.contains('button', "AC").click()
  })

  it('testing division', () => {
    cy.contains('button', "9").click().click()
    cy.get(':nth-child(1) > .orange > button').click()
    cy.contains('button', "2").click()
    cy.contains('button', "=").click()
    cy.get('.component-display > div').should('contain', '49.5')
    cy.contains('button', "AC").click()
  })

  it('link to github', () => {
    it('link to github', () => {
      cy.contains('.Follow', 'Follow Me on GitHub').should('have.text', "https://github.com/hbonavota")
    })
  })
})

describe('Error cases', () => {

  it('testing division by 0', () => {
    cy.contains('button', "0").click()
    cy.get(':nth-child(1) > .orange > button').click()
    cy.contains('button', "0").click()
    cy.contains('button', "=").click()
    cy.get('.swal-button').click()
    cy.get('.component-display > div').should('contain', '0')
    cy.contains('button', "AC").click()
  })

})