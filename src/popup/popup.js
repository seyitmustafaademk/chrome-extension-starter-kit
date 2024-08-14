import {DarkModeManager} from '../scripting/utils/darkModeManager.js';
import {LanguageManager} from '../scripting/utils/languageManager';

// Sayfa yüklendiğinde Dark Mode durumunu kontrol et ve güncelle
DarkModeManager.initialize().then(() => {
    console.log('Dark Mode durumu başarıyla yüklendi ve uygulandı.');
    DarkModeManager.addDarkModeListener();
}).catch(error => {
    console.error('Dark Mode durumu yüklenirken bir hata oluştu:', error.message);
});

// Dil Dosyasından Metinleri Al
LanguageManager.setElementText('#app-name', 'app_name');


// Ayarlar butonuna tıklandığında eklentinin ayarlar sayfasını açar
document.getElementById('btn-settings').addEventListener('click', (event) => {
    event.preventDefault();
    chrome.runtime.openOptionsPage();
});