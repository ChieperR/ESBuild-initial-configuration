import ESBuild from 'esbuild';
import path from 'path';
import config from './esbuild-config';


const PORT = Number(process.env.port) || 3000;

(async () => {
    const context = await ESBuild.context(config);
    await context.serve({
        servedir: config.outdir,
        port: PORT,
    })
})().then(() => {
    console.log(`Server started on http://localhost:` + PORT);
}).catch(err => {
    console.log(err)
})