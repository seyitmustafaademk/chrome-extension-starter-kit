import { StorageManager } from './storage/storageManager.js';

export class LanguageManager {

    /**
     * Dil ayarlarını başlatır ve tarayıcı dilini alır. Eğer kayıtlı bir dil ayarı
     * yoksa tarayıcı dilini kaydeder.
     *
     * @returns {Promise<string>} - Tarayıcı dilini içeren bir promise döndürür.
     */
    static initialize() {
        return StorageManager.getItem('language')
            .then(language => {
                if (language) {
                    return language;
                } else {
                    const browserLanguage = navigator.language || navigator.userLanguage;
                    console.log('Tarayıcı dil ayarı:', browserLanguage);
                    return StorageManager.setItem('language', browserLanguage)
                        .then(() => browserLanguage);
                }
            })
            .catch(error => {
                console.error('Dil ayarlarını başlatırken bir hata oluştu:', error.message);
            });
    }

    /**
     * Kayıtlı dil ayarını alır.
     *
     * @returns {Promise<string>} - Kayıtlı dil ayarını içeren bir promise döndürür.
     */
    static getCurrentLanguage() {
        return StorageManager.getItem('language');
    }

    /**
     * Yeni bir dil ayarı belirler.
     *
     * @param {string} language - Belirlenecek dil ayarını içeren bir string.
     * @returns {Promise<void>} - Dil ayarını belirleyen bir promise döndürür.
     */
    static setLanguage(language) {
        return StorageManager.setItem('language', language);
    }

    /**
     * Verilen anahtar için dil dosyasından mesajı alır.
     *
     * @param {string} key - Mesajın anahtarını içeren bir string.
     * @returns {string} - Mesajı içeren bir string döndürür.
     */
    static async getMessage(key) {
        try {
            const language = await this.getCurrentLanguage();
            let messages = await this.loadMessagesForLanguage(language);

            // Eğer dil dosyası boşsa (yani yüklenememişse) veya anahtar bulunamamışsa,
            // varsayılan olarak 'en' dil dosyasını yükle
            if (Object.keys(messages).length === 0 || !messages[key]) {
                console.warn(`Dil dosyası bulunamadı, varsayılan olarak 'en' dili kullanılacak.`);
                messages = await this.loadMessagesForLanguage('en');
            }

            return messages[key]?.message || `Mesaj "${key}" bulunamadı.`;
        } catch (error) {
            console.error('Mesaj alınırken bir hata oluştu:', error.message);
            return '';
        }
    }

    /**
     * Verilen dil için dil dosyasını yükler.
     *
     * @param {string} language - Dil kodunu içeren bir string.
     * @returns {Promise<object>} - Dil dosyasını içeren bir promise döndürür.
     */
    static async loadMessagesForLanguage(language) {
        try {
            const response = await fetch(`/_locales/${language}/messages.json`);
            if (!response.ok) {
                console.error('Dil dosyası yüklenirken bir hata oluştu');
            }
            return response.json();
        } catch (error) {
            console.error('Dil dosyası yüklenirken bir hata oluştu:', error.message);
            return {};
        }
    }

    /**
     * Verilen seçiciye sahip bir elementin metnini belirler.
     *
     * @param {string} selector - Elementi seçmek için kullanılacak bir CSS seçici.
     * @param {string} key - Mesajın anahtarını içeren bir string.
     */
    static setElementText(selector, key) {
        this.getMessage(key)
            .then(message => {
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(element => {
                        element.textContent = message;
                    });
                } else {
                    console.error(`"${selector}" seçicisiyle hiçbir element bulunamadı.`);
                }
            })
            .catch(error => {
                console.error(`"${selector}" seçicisiyle metin ayarlanırken bir hata oluştu:`, error.message);
            });
    }

}
