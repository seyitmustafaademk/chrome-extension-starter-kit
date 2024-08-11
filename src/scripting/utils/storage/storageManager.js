export class StorageManager {
    /**
     * Handle storage operations using the Chrome storage API.
     * @param {string} method - The storage method to call ('set', 'get', 'remove', 'clear').
     * @param {...any} args - Arguments to pass to the storage method.
     * @returns {Promise<any>} A promise that resolves with the result of the storage operation, or rejects with an error.
     */
    static handleChromeStorage(method, ...args) {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.local[method](...args, (result) => {
                    if (chrome.runtime.lastError) {
                        // Özel hata mesajı oluşturma
                        const errorMessage = `Chrome Storage Error in method ${method}: ${chrome.runtime.lastError.message}`;
                        console.error(errorMessage);
                        reject(new Error(errorMessage));
                    } else {
                        resolve(result);
                    }
                });
            } catch (error) {
                // Bilinmeyen hataları yakalama
                const errorMessage = `Unknown error occurred in StorageManager method ${method}: ${error.message}`;
                console.error(errorMessage);
                reject(new Error(errorMessage));
            }
        });
    }

    /**
     * Set an item in the Chrome local storage.
     * @param {string} key - The key under which to store the value.
     * @param {any} value - The value to store.
     * @returns {Promise<void>} A promise that resolves when the item is set, or rejects with an error.
     */
    static setItem(key, value) {
        const data = {};
        data[key] = value;
        return this.handleChromeStorage('set', data)
            .catch(error => {
                const errorMessage = `Failed to set item with key "${key}": ${error.message}`;
                console.error(errorMessage);
                return Promise.reject(new Error(errorMessage));
            });
    }

    /**
     * Retrieve an item from the Chrome local storage.
     * @param {string} key - The key of the item to retrieve.
     * @returns {Promise<any>} A promise that resolves with the value of the retrieved item, or rejects with an error.
     */
    static getItem(key) {
        return this.handleChromeStorage('get', key)
            .then(result => result[key])
            .catch(error => {
                const errorMessage = `Failed to get item with key "${key}": ${error.message}`;
                console.error(errorMessage);
                return Promise.reject(new Error(errorMessage));
            });
    }

    /**
     * Remove an item from the Chrome local storage.
     * @param {string} key - The key of the item to remove.
     * @returns {Promise<void>} A promise that resolves when the item is removed, or rejects with an error.
     */
    static removeItem(key) {
        return this.handleChromeStorage('remove', key)
            .catch(error => {
                const errorMessage = `Failed to remove item with key "${key}": ${error.message}`;
                console.error(errorMessage);
                return Promise.reject(new Error(errorMessage));
            });
    }

    /**
     * Clear all items from the Chrome local storage.
     * @returns {Promise<void>} A promise that resolves when all items are cleared, or rejects with an error.
     */
    static clear() {
        return this.handleChromeStorage('clear')
            .catch(error => {
                const errorMessage = `Failed to clear storage: ${error.message}`;
                console.error(errorMessage);
                return Promise.reject(new Error(errorMessage));
            });
    }
}
