
describe ('Pruebas de busqueda y filtrado de producots', () => {

    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit('https://automationexercise.com/products');
    });


    it ('Deberia buscar un producto y mostrar resultados relacionado', ()  => {
      
        cy.get('#search_product').type('dress');
        cy.get('#submit_search').click();

        cy.get('.title').should('be.visible').and('contain', 'Searched Products');

   
        cy.get('.single-products').first().should('contain.text', 'Dress');
    });


});