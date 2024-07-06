export class SessionManager {
    constructor() {}

    /**
     * Gets the current session value.
     * @param {string} key - The key of the session value to retrieve.
     * @returns {string|null} - The session value or null if not found.
     */
    getSessionValue(key) {
        return sessionStorage.getItem(key);
    }

    /**
     * Sets a session value.
     * @param {string} key - The key of the session value to set.
     * @param {string} value - The value to set.
     */
    setSessionValue(key, value) {
        sessionStorage.setItem(key, value);
    }

    /**
     * Removes a session value.
     * @param {string} key - The key of the session value to remove.
     */
    removeSessionValue(key) {
        sessionStorage.removeItem(key);
    }

    /**
     * Clears all session values.
     * @returns {Promise<void>}
     */
    clearSession() {
        return new Promise((resolve, reject) => {
            try {
                sessionStorage.clear();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}