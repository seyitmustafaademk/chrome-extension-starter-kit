import { StorageManager } from './storage/storageManager.js';

export class DarkModeManager {
    static darkModeSwitch = document.getElementById('input-dark-mode');

    /**
     * Checks if Dark Mode is enabled.
     * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if Dark Mode is enabled.
     */
    static async isDarkModeEnabled() {
        try {
            const value = await StorageManager.getItem('darkMode');
            return value !== null ? value : false;
        } catch (error) {
            console.error('Failed to retrieve Dark Mode setting:', error.message);
            return false; // Hata durumunda varsayılan olarak false döndür
        }
    }

    /**
     * Sets the Dark Mode status.
     * @param {boolean} isEnabled - Whether Dark Mode should be enabled.
     * @returns {Promise<void>} - A promise that resolves when the setting is saved.
     */
    static async setDarkMode(isEnabled) {
        try {
            await StorageManager.setItem('darkMode', isEnabled);
            document.body.dataset.darkMode = isEnabled ? 'true' : 'false';
        } catch (error) {
            console.error('Failed to set Dark Mode:', error.message);
        }
    }

    /**
     * Toggles the Dark Mode status.
     * @returns {Promise<void>} - A promise that resolves when the Dark Mode status is toggled.
     */
    static async toggleDarkMode() {
        try {
            const isEnabled = await this.isDarkModeEnabled();
            const newStatus = !isEnabled;
            await this.setDarkMode(newStatus);
        } catch (error) {
            console.error('Failed to toggle Dark Mode:', error.message);
        }
    }

    /**
     * Initializes the Dark Mode status on page load.
     * This method can be called on page load to ensure the correct theme is applied.
     * @returns {Promise<void>}
     */
    static async initialize() {
        try {
            const isDarkMode = await this.isDarkModeEnabled();
            await this.setDarkMode(isDarkMode);

            if (this.darkModeSwitch) {
                this.darkModeSwitch.checked = isDarkMode;
            }
        } catch (error) {
            console.error('Failed to initialize Dark Mode:', error.message);
        }
    }

    // Dark Mode durumunu dinleyen event listener'ı ekleyin
    static addDarkModeListener() {

        this.darkModeSwitch.addEventListener('change', async function() {
            const isDarkMode = this.checked;

            // DarkModeManager sınıfını kullanarak durumu kaydet ve CSS güncellemesini yap
            DarkModeManager.setDarkMode(isDarkMode)
                .then(() => {
                    console.log('Dark Mode durumu başarıyla kaydedildi ve uygulandı.');
                })
                .catch(error => {
                    console.error('Dark Mode durumu kaydedilirken bir hata oluştu  :', error.message);
                });
        });
    }
}
