export class SessionManager {
    constructor() {}

    /**
     * Gets the current session value.
     * @param {string} key - The key of the session value to retrieve.
     * @returns {Promise<string|null>} - A promise that resolves to the session value or null if not found.
     */
    getSessionValue(key) {
        return new Promise((resolve, reject) => {
            try {
                const value = sessionStorage.getItem(key);
                resolve(value);
            } catch (error) {
                const errorMessage = `Failed to get session value for key "${key}": ${error.message}`;
                console.error(errorMessage);
                reject(new Error(errorMessage));
            }
        });
    }

    /**
     * Sets a session value.
     * @param {string} key - The key of the session value to set.
     * @param {string} value - The value to set.
     * @returns {Promise<void>} - A promise that resolves when the value is set, or rejects with an error.
     */
    setSessionValue(key, value) {
        return new Promise((resolve, reject) => {
            try {
                sessionStorage.setItem(key, value);
                resolve();
            } catch (error) {
                if (error instanceof DOMException && error.name === 'QuotaExceededError') {
                    const errorMessage = 'Oturum depolama alanı dolu ve daha fazla veri kaydedilemiyor.';
                    console.error(errorMessage);
                    reject(new Error(errorMessage));
                } else {
                    const errorMessage = `Failed to set session value for key "${key}": ${error.message}`;
                    console.error(errorMessage);
                    reject(new Error(errorMessage));
                }
            }
        });
    }

    /**
     * Removes a session value.
     * @param {string} key - The key of the session value to remove.
     * @returns {Promise<void>} - A promise that resolves when the value is removed, or rejects with an error.
     */
    removeSessionValue(key) {
        return new Promise((resolve, reject) => {
            try {
                sessionStorage.removeItem(key);
                resolve();
            } catch (error) {
                const errorMessage = `Failed to remove session value for key "${key}": ${error.message}`;
                console.error(errorMessage);
                reject(new Error(errorMessage));
            }
        });
    }

    /**
     * Clears all session values.
     * @returns {Promise<void>} - A promise that resolves when the session is cleared, or rejects with an error.
     */
    clearSession() {
        return new Promise((resolve, reject) => {
            try {
                sessionStorage.clear();
                resolve();
            } catch (error) {
                const errorMessage = `Failed to clear session: ${error.message}`;
                console.error(errorMessage);
                reject(new Error(errorMessage));
            }
        });
    }
}
