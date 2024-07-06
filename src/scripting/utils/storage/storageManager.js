export class StorageManager {
    /**
     * Sets an item in storage.
     * @param {string} key - The key of the item.
     * @param {any} value - The value of the item.
     * @returns {Promise<void>} - A promise that resolves when the item is set.
     */
    static setItem(key, value) {
        return new Promise((resolve, reject) => {
            const data = {};
            data[key] = value;
            chrome.storage.local.set(data, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Gets an item from storage.
     * @param {string} key - The key of the item.
     * @returns {Promise<any>} - A promise that resolves to the value of the item.
     */
    static getItem(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(key, (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result[key]);
                }
            });
        });
    }

    /**
     * Removes an item from storage.
     * @param {string} key - The key of the item.
     * @returns {Promise<void>} - A promise that resolves when the item is removed.
     */
    static removeItem(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.remove(key, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Clears all items from storage.
     * @returns {Promise<void>} - A promise that resolves when storage is cleared.
     */
    static clear() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.clear(() => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }
}
