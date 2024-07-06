export class ContextMenuManager {
    constructor() {}

    /**
     * Creates a context menu item.
     * @param {object} options - The context menu item options.
     * @param {string} options.id - The ID of the context menu item.
     * @param {string} options.title - The title of the context menu item.
     * @param {Array<string>} options.contexts - The contexts in which the item appears.
     * @param {function} [callback] - The callback function.
     */
    createContextMenu(options, callback) {
        chrome.contextMenus.create(options, callback);
    }

    /**
     * Removes a context menu item.
     * @param {string} menuItemId - The ID of the context menu item to remove.
     */
    removeContextMenu(menuItemId) {
        chrome.contextMenus.remove(menuItemId);
    }

    /**
     * Removes all context menu items.
     */
    removeAllContextMenus() {
        chrome.contextMenus.removeAll();
    }
}