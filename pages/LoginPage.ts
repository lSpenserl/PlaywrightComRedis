import { expect, Locator, Page } from "@playwright/test";
import { obterCodigo2FA } from "../Support/db";

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async acessarPaginaLogin() {
        await this.page.goto('http://paybank-mf-auth:3000/');
    }

    async preencherCPF(cpf: string) {
        await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
    }

    async informaCPF(cpf: string) {
        await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
        await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async preencherSenha(senha: string) {
        for (const digito of senha) {
            await this.page.getByRole('button', { name: digito }).click();
        }

        await this.page.getByRole('button', { name: 'Continuar' }).click();
    }

    async preencherCodigo2FA(codigo2FA: string) {
        await this.page.getByRole('textbox', { name: '000000' }).fill(codigo2FA);
        await this.page.getByRole('button', { name: 'Verificar' }).click();
    }
}