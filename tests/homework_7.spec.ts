import {test, expect} from "@playwright/test";
import { mainPage } from "../page-object/mainPage";
import { wishList } from "../page-object/wishList";
import { productGramicci } from "../page-object/product-page";

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
        const grammicciProduct = new productGramicci(page);
        const mainpage = new mainPage(page);
        const wishlist = new wishList(page);
    
        await mainpage.goto();
        await mainpage.cookiesModalBtnAccept.click();
        await mainpage.searchFieldonMain.click();
        await mainpage.searchFieldonModal.fill("gramicci cordura");
        await mainpage.searchFieldonModal.press("Enter");
        
        await expect(grammicciProduct.gramicciCorduraBag).toBeTruthy()
    })
})


