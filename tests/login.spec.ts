import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../Support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage';

import { cleanJobs,getJob } from '../Support/redis';


test('Não deve logar quando o código de autenticação for inválido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const usuario = {
    cpf: '00000014141',
    senha: '123456'
  };

  await loginPage.acessarPaginaLogin();
  await loginPage.informaCPF(usuario.cpf);
  await loginPage.preencherSenha(usuario.senha);

  await expect(page.locator('span')).toContainText('Acesso negado. Por favor, tente novamente.');
});

test('Deve acessar a conta do usuário', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const dashPage = new DashPage(page);

  const usuario = {
    cpf: '00000014141',
    senha: '147258'
  };

  await cleanJobs();

  await loginPage.acessarPaginaLogin();
  await loginPage.informaCPF(usuario.cpf);
  await loginPage.preencherSenha(usuario.senha);

  await page.getByRole('heading',{ name: 'Verificação em duas etapas'})
    .waitFor({timeout: 3000});

  //const codigo2FA = await obterCodigo2FA(usuario.cpf);
  const code = await getJob();


  await loginPage.preencherCodigo2FA(code);

  await expect(await dashPage.obterSaldoConta()).toHaveText('R$ 5.000,00');
});