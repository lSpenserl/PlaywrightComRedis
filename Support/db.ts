import pgPromisse from 'pg-promise';

const pgp = pgPromisse();
const db = pgp('postgres://dba:dba@paybank-db:5432/UserDB');

export async function obterCodigo2FA(cpf: string) {
    const query = `
            SELECT 
                t.code
            FROM public."TwoFactorCode" t
                JOIN public."User" u 
                    ON t."userId" = u.id
            WHERE u.cpf = '${cpf}'
            ORDER BY t.id DESC
            LIMIT 1;
    `;
    const result = await db.oneOrNone(query);
    return result ? result.code : null;
}