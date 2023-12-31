import {BuildOptions} from 'esbuild';
import path from 'path';
import {CleanPlugin} from "./plugins/CleanPlugin";
import {HTMLPlugin} from "./plugins/HTMLPlugin";

const mode = process.env.MODE || 'development';

const isDev = mode === 'development'
const isProd = mode === 'production'

function resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments)
}

const config: BuildOptions = {
    outdir: resolveRoot('build'),
    entryPoints: [resolveRoot('src', 'index.tsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    tsconfig: resolveRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev,
    metafile: true,
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.jpeg': 'file',
        '.gif': 'file',
        '.webp': 'file',
        '.svg': 'file',
        '.ttf': 'file',
        '.woff': 'file',
    },
    plugins: [
        CleanPlugin,
        HTMLPlugin( {
            title: 'Цифрэк',
        })
    ],
}

export default config;