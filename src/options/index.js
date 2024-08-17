import {DarkModeManager} from '../scripting/utils/darkModeManager.js';
import {LanguageManager} from '../scripting/utils/languageManager';

// Sayfa yüklendiğinde Dark Mode durumunu kontrol et ve güncelle
DarkModeManager.initialize().then(() => {
    // DarkModeManager.addDarkModeListener();
}).catch(error => {
    console.error('Dark Mode durumu yüklenirken bir hata oluştu:', error.message);
});

// Dil Dosyasından Metinleri Al
LanguageManager.setElementText('.i18n-app-name', 'app_name');
LanguageManager.setElementText('.i18n-sidebar-app-settings', 'options_sidebar_app_settings_label');
LanguageManager.setElementText('.i18n-sidebar-ext-settings', 'options_sidebar_ext_settings_label');