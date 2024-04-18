export default class FuelExpenses_ {

    addExpenses() {
        return cy.xpath ("//button[contains(text(), 'Add an expense')]")
    }

    addCarExpenses() {
        return cy.xpath("//input[@id='addCarExpenses']");
    }

    addExpenseMileage() {
        return cy.xpath("//input[@id='addExpenseMileage']");
    }

    addExpenseLiters() {
        return cy.xpath("//input[@id='addExpenseLiters']")
    }

    addExpenseTotalCost() {
        return cy.xpath("//input[@id='addExpenseTotalCost']");
    }

    add() {
        return cy.xpath("//app-add-expense-modal//button[.='Add']");
    }
}

export const fuelExpenses = new FuelExpenses_()