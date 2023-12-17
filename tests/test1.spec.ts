import { test, expect} from '@playwright/test';

test('has first cookies modal', async ({ page }) => {
    await page.goto('https://warsawsneakerstore.com/');
    await expect(page.locator('#cmpbox')).toBeVisible;
    await expect(page.getByRole('button', { name: 'Cookies settings' })).toBeVisible();
    await page.getByRole('button', { name: 'Cookies settings' }).click();
});

test('has second cookies modal',async ({page}) => {
    await page.goto('https://warsawsneakerstore.com/');
    await page.getByRole('button', { name: 'Cookies settings' }).click();    
    await expect(page.getByLabel('Customize your choice')).toBeVisible;
    await expect(page.getByRole('checkbox', { name: 'Performance cookies' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Functional cookies' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Advertising cookies' })).toBeVisible();
});

test('accept the cookies', async ({page})=>{
    await page.goto('https://warsawsneakerstore.com/');
    await page.getByRole('button', { name: 'Cookies settings' }).click();    
    await page.getByRole('button', { name: 'Remember my selection' }).click();
});

test('swtich the language to english',async ({page}) => {
    await page.goto('https://warsawsneakerstore.com/');
    await page.getByRole('button', { name: 'Cookies settings' }).click();    
    await page.getByRole('button', { name: 'Remember my selection' }).click();
    await page.getByRole('button', { name: 'pl (PLN) ' }).click();
    await page.getByRole('link', { name: 'English (EUR)' }).click();
    await expect(page.locator('//*[@id="menu-nav"]/div[1]/ul/li[3]/span')).toHaveText("Clothing")
})

test('has sales', async ({page}) => {
    await page.goto('https://warsawsneakerstore.com/');
    await page.getByRole('button', { name: 'Cookies settings' }).click();
    await page.getByRole('button', { name: 'Remember my selection' }).click();
    await page.getByRole('button', { name: 'pl (PLN) ' }).click();
    await page.getByRole('link', { name: 'English (EUR)' }).click();
    await expect(page.getByRole('link', { name: 'Winter Sale' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Winter Sale' }).nth(2)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Winter Sale' }).nth(3)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Winter Sale' }).nth(4)).toBeVisible();
});

