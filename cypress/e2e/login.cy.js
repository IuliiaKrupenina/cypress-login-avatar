describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажала войти

         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // нашла и ввела имейл для восстановления
        cy.get('#restoreEmailButton').click(); // нажала кнопку отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что появляется текст об отправке пароля на имейл
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio6'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что при неуспешной авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('german@dolnikoff.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что при неуспешной авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
    })

    it('Есть ли в логине @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без собачки
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что появляется текст о проблеме валидации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
    })

    it('Приведение заглавных букв в логине к строчным', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки забыли пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик, и он виден для пользователя
    })

    })
 
    // запуск через теринал: npx cypress run --spec cypress/e2e/login.cy.js --browser chrome