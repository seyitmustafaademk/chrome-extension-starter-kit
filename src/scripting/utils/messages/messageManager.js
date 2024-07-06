export class MessageManager {
    constructor() {}

    /**
     * Sends a message.
     * @param {object} message - The message to send.
     * @returns {Promise<object>} - The response message.
     */
    sendMessage(message) {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(message, (response) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(response);
                }
            });
        });
    }

    /**
     * Adds a message listener.
     * @param {function} callback - The callback function.
     */
    addMessageListener(callback) {
        chrome.runtime.onMessage.addListener(callback);
    }
}