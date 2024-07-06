export class ContextMenuManager {
    constructor() {}

    /**
     * Creates a context menu item.
     * @param {object} options - The context menu item options.
     * @param {string} options.id - The ID of the context menu item.
     * @param {string} options.title - The title of the context menu item.
     * @param {Array<string>} options.contexts - The contexts in which the item appears.
     * @returns {Promise<string>} - Resolves with the ID of the created context menu item.
     */
    createContextMenu(options) {
        return new Promise((resolve, reject) => {
            chrome.contextMenus.create(options, (createdItem) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message);
                } else {
                    resolve(createdItem);
                }
            });
        });
    }

    /**
     * Removes a context menu item.
     * @param {string} menuItemId - The ID of the context menu item to remove.
     * @returns {Promise<void>}
     */
    removeContextMenu(menuItemId) {
        return new Promise((resolve, reject) => {
            chrome.contextMenus.remove(menuItemId, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Removes all context menu items.
     * @returns {Promise<void>}
     */
    removeAllContextMenus() {
        return new Promise((resolve, reject) => {
            chrome.contextMenus.removeAll(() => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError.message);
                } else {
                    resolve();
                }
            });
        });
    }
}
