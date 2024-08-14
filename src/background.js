import {LanguageManager} from './scripting/utils/languageManager.js';

chrome.runtime.onInstalled.addListener(function(details) {
    // Dil ayarlarını başlatır ve tarayıcı dilini alır. Eğer kayıtlı bir dil ayarı
    // yoksa tarayıcı dilini kaydeder.
    LanguageManager.initialize().then(() => {
        console.log('Dil ayarları başarıyla yüklendi ve uygulandı.');
    }).catch(error => {
        console.error('Dil ayarları yüklenirken bir hata oluştu:', error.message);
    });

    if (details.reason === "install") {
        console.log("Extension installed");
        // Perform actions on installation, like setting default storage values
    } else if (details.reason === "update") {
        console.log("Extension updated");
        // Perform actions on update, like migrating storage formats
    }
});

chrome.commands.onCommand.addListener(function(command) {
    if (command === "toggle-feature") {
        // Burada, "toggle-feature" komutu tetiklendiğinde yapılacak işlemler yer alır.
        // Örneğin, bir özelliği açıp kapatmak veya bir işlevi çalıştırmak.
        alert("Toggle feature command received");
        // Özelliği açıp kapatma işlemini burada gerçekleştirin.
    }
});