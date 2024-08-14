const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Giriş noktası belirtilmedi çünkü bu yapılandırma sadece kopyalama işlemi için kullanılacak
    mode: 'production',
    entry: {
        background: './src/background.js',
        content: './src/content.js',
        options: './src/options/options.js',
        popup: './src/popup/popup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: (pathData) => {
            // Giriş noktalarının isimlerine göre çıktıları özelleştirin
            if (pathData.chunk.name === 'popup') {
                return 'popup/[name].js'; // popup.js dosyasını popup klasörü altında çıkar
            } else if (pathData.chunk.name === 'options') {
                return 'options/[name].js'; // options.js dosyasını options klasörü altında çıkar
            }
            return '[name].js'; // Diğer dosyalar ana dizinde çıksın
        }
    },
    plugins: [
        // CopyWebpackPlugin ile dosya ve klasör kopyalama işlemleri
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '' },
                { from: 'src/_locales', to: '_locales' },
                { from: 'src/popup/index.html', to: 'popup/' },
                { from: 'src/options/index.html', to: 'options/' },
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ]
};