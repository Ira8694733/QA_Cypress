export default class FuelExpensesPage {

    static get routerlink() {
        return cy.xpath("//a[@routerlink='expenses']");
    }

    static get addExpenseMileage() {
        return cy.xpath("//input[@id='addExpenseMileage']");
    }

    static get addExpenseLiters() {
        return cy.xpath("//input[@id='addExpenseLiters']")
    }

    static get addExpenseTotalCost() {
        return cy.xpath("//input[@id='addExpenseTotalCost']");
    }

    static get add() {
        return cy.xpath("//app-add-expense-modal//button[.='Add']");
    }

    static get addExpenses() {
        return cy.xpath ("//button[@class='car_add-expense btn btn-success']");
    }

    static get datePicker() {
        return cy.get('span.icon-calendar')
    }

}

export const fuelExpensesPage = new FuelExpensesPage()