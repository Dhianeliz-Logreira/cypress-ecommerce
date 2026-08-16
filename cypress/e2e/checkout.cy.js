describe('Prueba completa de compra', () => {

    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    it('Deberia de completar el proceso de  compra exitosamente', () => {
        cy.visit('https://automationexercise.com/login');


        const emailUnico = `qa_test_${Date.now()}@mail.com`;

        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="signup-name"]').type('Estudiante QA');
        cy.get('[data-qa="signup-email"]').type(emailUnico);
        cy.get('[data-qa="signup-button"]').click();

    
        cy.get('#id_gender1').click();
        cy.get('[data-qa="password"]').type('Password123');
        cy.get('[data-qa="first_name"]').type('Juan');
        cy.get('[data-qa="last_name"]').type('Perez');
        cy.get('[data-qa="address"]').type('Calle Falsa 123');
        cy.get('[data-qa="country"]').select('Uruguay');
        cy.get('[data-qa="state"]').type('Montevideo');
        cy.get('[data-qa="city"]').type('Montevideo');
        cy.get('[data-qa="zipcode"]').type('90210');
        cy.get('[data-qa="mobile_number"]').type('1234567890');

        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="continue-button"]').click();

        cy.contains('Logged in as').should('be.visible');

        cy.visit('https://automationexercise.com/products');
        cy.get('#search_product').type('tshirt');
        cy.get('#submit_search').click();

        cy.get('.single-products').first().scrollIntoView();
        cy.get('.add-to-cart').first().click({ force: true });

       
        cy.get('.modal-content').should('be.visible');
        cy.get('u').contains('View Cart').click();
        cy.url().should('include', '/view_cart');

        cy.get('.btn.btn-default.check_out').click();

        
        cy.url({ timeout: 10000 }).should('include', '/checkout');
        cy.get('#address_delivery').should('be.visible');

        
        cy.get('textarea[name="message"]').type('Por favor entregar en el horario de la mañana.');
        cy.get('.btn.btn-default.check_out').click();


        cy.url().should('include', '/payment');
        cy.get('[data-qa="name-on-card"]').type('Juan Perez');
        cy.get('[data-qa="card-number"]').type('4111111111111111');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('12');
        cy.get('[data-qa="expiry-year"]').type('2028');

        cy.get('[data-qa="pay-button"]').click();

        
        cy.get('[data-qa="order-placed"]').should('be.visible');
        cy.get('.title').should('contain.text', 'Order Placed');

    });

});