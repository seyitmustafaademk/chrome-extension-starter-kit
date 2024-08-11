export class CookieManager {
    constructor() {}

    /**
     * Sets a cookie.
     * @param {object} details - The details of the cookie.
     * @returns {Promise<chrome.cookies.Cookie>} - The cookie that was set, or a rejected promise with an error.
     */
    set(details) {
        return new Promise((resolve, reject) => {
            try {
                chrome.cookies.set(details, (cookie) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(`Failed to set cookie: ${chrome.runtime.lastError.message}`));
                    } else {
                        resolve(cookie);
                    }
                });
            } catch (error) {
                reject(new Error(`Exception in CookieManager.set: ${error.message}`));
            }
        });
    }

    /**
     * Gets a cookie.
     * @param {object} details - The details to identify the cookie.
     * @returns {Promise<chrome.cookies.Cookie>} - The cookie that was retrieved, or a rejected promise with an error.
     */
    get(details) {
        return new Promise((resolve, reject) => {
            try {
                chrome.cookies.get(details, (cookie) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(`Failed to get cookie: ${chrome.runtime.lastError.message}`));
                    } else {
                        resolve(cookie);
                    }
                });
            } catch (error) {
                reject(new Error(`Exception in CookieManager.get: ${error.message}`));
            }
        });
    }

    /**
     * Removes a cookie.
     * @param {object} details - The details to identify the cookie.
     * @returns {Promise<object>} - An object containing details about the removed cookie, or a rejected promise with an error.
     */
    remove(details) {
        return new Promise((resolve, reject) => {
            try {
                chrome.cookies.remove(details, (result) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(`Failed to remove cookie: ${chrome.runtime.lastError.message}`));
                    } else {
                        resolve(result);
                    }
                });
            } catch (error) {
                reject(new Error(`Exception in CookieManager.remove: ${error.message}`));
            }
        });
    }

    /**
     * Gets all cookies.
     * @param {object} [details] - The details to filter the cookies.
     * @returns {Promise<chrome.cookies.Cookie[]>} - The cookies that match the given details, or a rejected promise with an error.
     */
    getAll(details = {}) {
        return new Promise((resolve, reject) => {
            try {
                chrome.cookies.getAll(details, (cookies) => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(`Failed to get all cookies: ${chrome.runtime.lastError.message}`));
                    } else {
                        resolve(cookies);
                    }
                });
            } catch (error) {
                reject(new Error(`Exception in CookieManager.getAll: ${error.message}`));
            }
        });
    }
}
