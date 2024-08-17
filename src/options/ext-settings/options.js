import {DarkModeManager} from '../../scripting/utils/darkModeManager.js';
import {LanguageManager} from '../../scripting/utils/languageManager';

// Dil Dosyasından Metinleri Al
LanguageManager.setElementText('.i18n-page-title-ext-settings', 'page_title_ext_options');
LanguageManager.setElementText('.i18n-page-description-ext-settings', 'page_description_ext_options');
LanguageManager.setElementText('.i18n-language-card-title', 'ext_options_language_card_title');
LanguageManager.setElementText('.i18n-language-card-description', 'ext_options_language_card_description');
LanguageManager.setElementText('.i18n-language-card-select-label', 'ext_options_language_card_select_label');
LanguageManager.setElementText('.i18n-language-card-save-button', 'ext_options_language_card_save_button');
LanguageManager.setElementText('.i18n-darkmode-card-title', 'ext_options_darkmode_card_title');
LanguageManager.setElementText('.i18n-darkmode-card-description', 'ext_options_darkmode_card_description');
LanguageManager.setElementText('.i18n-darkmode-card-select-label', 'ext_options_darkmode_card_select_label');
LanguageManager.setElementText('.i18n-darkmode-card-save-button', 'ext_options_darkmode_card_save_button');

let select_language = document.getElementById('select-language');
let btn_save_language = document.getElementById('btn-save-language');
let select_darkmode = document.getElementById('select-darkmode');
let btn_save_darkmode = document.getElementById('btn-save-darkmode');

let current_language = await LanguageManager.getCurrentLanguage();
let is_darkmode = await DarkModeManager.isDarkModeEnabled();
let languages = await LanguageManager.getAvailableLanguages();

// ------------------------------------------------------------
// LANGUAGE SETTINGS
// - Dil seçeneklerini oluştur ve mevcut dil seçeneğini işaretle
// - Dil seçeneği değiştiğinde sayfayı yeniden yükle
// ------------------------------------------------------------
languages.forEach(language => {
    let option = document.createElement('option');
    option.value = language.code;
    option.text = language.name;
    if (language.code === current_language) {
        option.selected = true;
    }
    select_language.appendChild(option);
});
btn_save_language.addEventListener('click', async (event) => {
    let selected_language = select_language.value;
    if (selected_language === current_language) {
        return;
    }
    await LanguageManager.setLanguage(selected_language);
    window.location.reload();
});

// ------------------------------------------------------------
// DARK MODE SETTINGS
// - Dark Mode anahtarında mevcut durumu işaretle
// - Dark Mode anahtarı değiştiğinde temayı güncelle
// ------------------------------------------------------------
select_darkmode.value = (is_darkmode ? '1' : '0');
btn_save_darkmode.addEventListener('click', async (event) => {
    let selected_darkmode = (select_darkmode.value === '1');
    console.log(selected_darkmode, is_darkmode);
    if (selected_darkmode === is_darkmode) {
        return;
    }
    await DarkModeManager.setDarkMode(selected_darkmode);
    is_darkmode = selected_darkmode;
});