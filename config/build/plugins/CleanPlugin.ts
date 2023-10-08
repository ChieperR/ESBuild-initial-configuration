import {rm} from 'fs/promises'
import {Plugin} from 'esbuild'

export const CleanPlugin: Plugin = {
    name: 'CleanPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                const outdir = build.initialOptions.outdir
                if (outdir) {
                    // Опасный код, ничего не трогать
                    await rm(outdir, {recursive: true})
                }
            } catch (e) {
                console.log('Не удалось очистить папку')
            }
        })
    },
}