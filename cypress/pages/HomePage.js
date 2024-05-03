
export default class HomePage {
    static get logout(){
        return cy.get('span.icon-logout',{timeout:10000})
    }

    static get removeCarButton(){
        return cy.xpath("//button[@class='btn btn-outline-danger']",{timeout:10000});
    }

    static get removeButton(){
        return cy.xpath("//button[@class='btn btn-danger']",{timeout:10000});
    }24

    static get waitingApi(){
        return cy.get('.alert-success', {timeout:10000});

    }
}

export const homePage = new HomePage()