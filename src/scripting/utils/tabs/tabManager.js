export class TabManager {
    /**
     * Creates a new tab.
     * @param {object} createProperties - Properties for the new tab.
     * @returns {Promise<chrome.tabs.Tab>} - A promise that resolves to the created tab.
     */
    create(createProperties) {
        return new Promise((resolve, reject) => {
            chrome.tabs.create(createProperties, (tab) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(tab);
                }
            });
        });
    }

    /**
     * Queries tabs.
     * @param {object} queryInfo - Query info for the tabs.
     * @returns {Promise<chrome.tabs.Tab[]>} - A promise that resolves to an array of tabs.
     */
    query(queryInfo) {
        return new Promise((resolve, reject) => {
            chrome.tabs.query(queryInfo, (tabs) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(tabs);
                }
            });
        });
    }

    /**
     * Updates a tab.
     * @param {number} tabId - The ID of the tab to update.
     * @param {object} updateProperties - Properties to update in the tab.
     * @returns {Promise<chrome.tabs.Tab>} - A promise that resolves to the updated tab.
     */
    update(tabId, updateProperties) {
        return new Promise((resolve, reject) => {
            chrome.tabs.update(tabId, updateProperties, (tab) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(tab);
                }
            });
        });
    }

    /**
     * Removes a tab.
     * @param {number|number[]} tabIds - The ID or array of IDs of the tabs to remove.
     * @returns {Promise<void>} - A promise that resolves when the tabs are removed.
     */
    remove(tabIds) {
        return new Promise((resolve, reject) => {
            chrome.tabs.remove(tabIds, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }
}
