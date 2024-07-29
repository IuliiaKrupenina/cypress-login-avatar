describe('Новый аватар', function () {

    it('Новый аватар', function () {
         cy.visit('https://pokemonbattle.ru/');  // зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('iuliiakrupenina@yandex.ru');
         cy.get('#password').type('Milka020720');
         cy.get('.auth__button').click();
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > .shop__button').first().click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/26');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Iuliia Krupenina');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type(56456);
         cy.get('.payment__submit-button').click();
         cy.get('.payment__success1').contains('Покупка прошла успешно').should('be.visible');

    })
    })