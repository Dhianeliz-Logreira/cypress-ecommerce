describe ('Prueba de Inicio de sesion', () => {

    it ('Deberia iniciar sesion exitosamente con credenciales validas', () => {
        
        cy.visit('https://practicetestautomation.com/practice-test-login/');

        
        cy.get('#username').type('student');

        cy.get('#password').type('Password123');
 
        cy.get('#submit').click();

        cy.url().should('include', '/logged-in-successfully/');

        cy.get('.post-title').should('contain.text', 'Logged In Successfully');
    });
});  
