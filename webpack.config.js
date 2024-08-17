const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Giriş noktası belirtilmedi çünkü bu yapılandırma sadece kopyalama işlemi için kullanılacak
    mode: 'production',
    entry: {
        background: './src/background.js',
        content: './src/content.js',
        popup: './src/popup/popup.js',
        // Tüm src/options/ içindeki JS dosyalarını ve alt dizinlerdeki options.js dosyalarını dahil edin
        ...glob.sync('./src/options/**/*.js').reduce((entries, file) => {
            const entryName = path.relative('./src', file).replace(/\.js$/, '');
            entries[entryName] = './' + file.replace(/\\/g, '/'); // Yolun başına ./ ekleyin ve Windows'taki \ karakterlerini / ile değiştirin
            return entries;
        }, {})
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => {
            if (pathData.chunk.name.startsWith('popup')) {
                return `popup/[name].js`;
            } else if (pathData.chunk.name.startsWith('options')) {
                const relativePath = pathData.chunk.name.replace(/^options\//, 'options/');
                return `${relativePath}.js`;
            }
            return `[name].js`;
        }
    },
    plugins: [
        // CopyWebpackPlugin ile dosya ve klasör kopyalama işlemleri
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '' },
                { from: 'src/_locales', to: '_locales' },
                { from: 'src/popup/index.html', to: 'popup/' },
                {
                    from: 'src/options/**/*.html',
                    to: ({ context, absoluteFilename }) => {
                        return path.relative(path.resolve(__dirname, 'src'), absoluteFilename);
                    },
                },
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ]
};