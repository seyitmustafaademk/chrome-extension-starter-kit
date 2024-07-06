const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Giriş noktası belirtilmedi çünkü bu yapılandırma sadece kopyalama işlemi için kullanılacak
    mode: 'production',
    entry: {
        background: './src/background.js',
        content: './src/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // CopyWebpackPlugin ile dosya ve klasör kopyalama işlemleri
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '' },
                { from: 'src/_locales', to: '_locales' },
                { from: 'src/popup', to: 'popup' },
                { from: 'src/options', to: 'options' },
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ]
};