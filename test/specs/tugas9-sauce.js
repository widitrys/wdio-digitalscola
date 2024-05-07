
describe('Sample Test Cases', () => {
    it('User Test Cases - Success Login', async () => {

        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await username.setValue('standard_user')
        await password.setValue('secret_sauce')
        await loginButton.click()

        const elem = await $('#add-to-cart-sauce-labs-backpack');
        await elem.waitForDisplayed({timeout :10000})

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    })

    it('Add item to cart - Success add cart', async() =>{
        const addCart = await browser.$('#add-to-cart-sauce-labs-bike-light')
        const cartButton = await browser.$('#shopping_cart_container')
        const itemBackLight = await browser.$('#item_0_title_link')

        await addCart.click()

        await cartButton.click()

        const elem = await $('#checkout');
        await elem.waitForDisplayed({timeout :10000})

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(itemBackLight).toHaveText('Sauce Labs Bike Light')


    })
})

