import { Locator, Page } from "@playwright/test";

export class DashPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async obterSaldoConta(): Promise<Locator> {
        return this.page.locator('#account-balance');
    }

}