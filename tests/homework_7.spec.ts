import {test, expect} from "@playwright/test";
import { mainPage } from "../page-object/mainPage";
import { wishList } from "../page-object/wishList";
import { product_page } from "../page-object/product-page";

test.describe('buy product', () => {

    test("Search the product", async ({page}) => {
        const mainpage = new mainPage(page);
        const wishlist = new wishList(page);
    
        await mainpage.goto();
        await mainpage.cookiesModalBtnAccept.click();
        await wishlist.wishListBtn.click();
    
        await expect(wishlist.saleProducts).toHaveText("Wszystkie produkty");
    })
    
    
    test("is the product found", async ({page}) => {
        const product = new product_page(page);
        const mainpage = new mainPage(page);
        const wishlist = new wishList(page);
    
        await mainpage.goto();
        await mainpage.cookiesModalBtnAccept.click();
        await mainpage.searchFieldonMain.click();
        await mainpage.searchFieldonModal.fill("gramicci cordura");
        await mainpage.searchFieldonModal.press("Enter");

        expect(product.gramicciCorduraBag).toBeTruthy()
    })

    test("No My size in US", async({page})=>{
        const product = new product_page(page);
        const mainpage = new mainPage(page);
        await mainpage.goto();
        await mainpage.cookiesModalBtnAccept.click();
        await mainpage.searchFieldonMain.click();
        await mainpage.searchFieldonModal.fill("Nike ACG Torre Mid Waterproof");
        await mainpage.searchFieldonModal.press("Enter");
        await product.nikeACGWaterProof.click();
        await product.sizeUS.click();
        await product.exceededSize.click();
        
        expect(product.sizeAvailability).toBeTruthy;
    })
});