import {defineConfig} from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.js',
            userscript: {
                name: {
                    '': 'LOLZHelper Reborn'
                },
                icon: 'https://zelenka.guru/public/2017/og.png',
                namespace: 'https://lolz.guru/',
                match: ['https://lolz.guru/*', 'https://zelenka.guru/*', 'https://lzt.market/*'],
                author: 'insecure_',
                "run-at": 'document-start',
                updateURL: "https://github.com/LOLZHelper/LOLZHelperReborn/releases/latest/download/lolzhelper.user.js",
                downloadURL: "https://github.com/LOLZHelper/LOLZHelperReborn/releases/latest/download/lolzhelper.user.js",
            },
        }),
    ],
});
