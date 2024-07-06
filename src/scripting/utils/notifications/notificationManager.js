export class NotificationManager {
    constructor() {}

    /**
     * Creates a new notification.
     * @param {string} notificationId - The ID of the notification.
     * @param {object} options - The notification options.
     * @param {string} options.type - The type of the notification (e.g., 'basic').
     * @param {string} options.iconUrl - The URL of the icon.
     * @param {string} options.title - The title of the notification.
     * @param {string} options.message - The message of the notification.
     * @returns {Promise<string>} - The ID of the created notification.
     */
    createNotification(notificationId, options) {
        return new Promise((resolve, reject) => {
            chrome.notifications.create(notificationId, options, (id) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(id);
                }
            });
        });
    }

    /**
     * Clears a notification.
     * @param {string} notificationId - The ID of the notification.
     * @returns {Promise<boolean>} - Whether the notification was cleared.
     */
    clearNotification(notificationId) {
        return new Promise((resolve, reject) => {
            chrome.notifications.clear(notificationId, (wasCleared) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(wasCleared);
                }
            });
        });
    }

    /**
     * Updates a notification.
     * @param {string} notificationId - The ID of the notification.
     * @param {object} options - The updated notification options.
     * @returns {Promise<boolean>} - Whether the notification was updated.
     */
    updateNotification(notificationId, options) {
        return new Promise((resolve, reject) => {
            chrome.notifications.update(notificationId, options, (wasUpdated) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(wasUpdated);
                }
            });
        });
    }
}