export class CookieManager {
    constructor() {}

    /**
     * Sets a cookie.
     * @param {object} details - The details of the cookie.
     * @param {string} details.url - The URL with which the cookie to be associated.
     * @param {string} [details.name] - The name of the cookie.
     * @param {string} [details.value] - The value of the cookie.
     * @param {string} [details.domain] - The domain of the cookie.
     * @param {string} [details.path] - The path of the cookie.
     * @param {boolean} [details.secure] - Whether the cookie should be marked as Secure.
     * @param {boolean} [details.httpOnly] - Whether the cookie should be marked as HttpOnly.
     * @param {string} [details.sameSite] - The SameSite attribute of the cookie.
     * @param {integer} [details.expirationDate] - The expiration date of the cookie as the number of seconds since the UNIX epoch.
     * @returns {Promise<chrome.cookies.Cookie>} - The cookie that was set.
     */
    set(details) {
        return new Promise((resolve, reject) => {
            chrome.cookies.set(details, (cookie) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(cookie);
                }
            });
        });
    }

    /**
     * Gets a cookie.
     * @param {object} details - The details to identify the cookie.
     * @param {string} details.url - The URL with which the cookie is associated.
     * @param {string} details.name - The name of the cookie.
     * @returns {Promise<chrome.cookies.Cookie>} - The cookie that was retrieved.
     */
    get(details) {
        return new Promise((resolve, reject) => {
            chrome.cookies.get(details, (cookie) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(cookie);
                }
            });
        });
    }

    /**
     * Removes a cookie.
     * @param {object} details - The details to identify the cookie.
     * @param {string} details.url - The URL with which the cookie is associated.
     * @param {string} details.name - The name of the cookie.
     * @returns {Promise<object>} - An object containing details about the removed cookie.
     */
    remove(details) {
        return new Promise((resolve, reject) => {
            chrome.cookies.remove(details, (details) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(details);
                }
            });
        });
    }

    /**
     * Gets all cookies.
     * @param {object} [details] - The details to filter the cookies.
     * @returns {Promise<chrome.cookies.Cookie[]>} - The cookies that match the given details.
     */
    getAll(details = {}) {
        return new Promise((resolve, reject) => {
            chrome.cookies.getAll(details, (cookies) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(cookies);
                }
            });
        });
    }
}