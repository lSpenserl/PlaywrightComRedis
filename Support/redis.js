import { Queue } from "bullmq";

const connection = {
    host: 'paybank-redis',
    port: 6379
};

const queue = new Queue('twoFactorQueue', { connection });

export const getJob = async () =>  {
    const jobs = await queue.getJobs(); //Busca todos os jobs na fila
    return jobs[0].data.code;  //Pega o primeiro job da fila.
}

export const cleanJobs = async () => {
    await queue.obliterate({ force: true }); //Limpa a fila
}