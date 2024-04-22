export default class ProfilePage {

    userNavDropdown() {
        return cy.xpath("//button[@id='userNavDropdown']");
    }

    routerlink(){
        return cy.xpath("//a[@routerlink='/panel/profile']");
    }

}

export const profilePage = new ProfilePage()