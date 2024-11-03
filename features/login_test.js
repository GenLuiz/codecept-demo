Feature('login');

Scenario('Test Login',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/v1/')
    I.see('Accepted usernames are:')
    I.fillField('user-name', 'standard_user')
    I.fillField('password', 'secret_sauce')
    I.click('LOGIN')
});
