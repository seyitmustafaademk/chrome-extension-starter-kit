export class BookmarkManager {
    constructor() {}

    /**
     * Creates a new bookmark.
     * @param {object} details - The details of the bookmark.
     * @param {string} details.title - The title of the bookmark.
     * @param {string} details.url - The URL of the bookmark.
     * @returns {Promise<chrome.bookmarks.BookmarkTreeNode>} - The created bookmark.
     */
    createBookmark(details) {
        return new Promise((resolve, reject) => {
            chrome.bookmarks.create(details, (bookmark) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(bookmark);
                }
            });
        });
    }

    /**
     * Removes a bookmark.
     * @param {string} bookmarkId - The ID of the bookmark to remove.
     * @returns {Promise<void>}
     */
    removeBookmark(bookmarkId) {
        return new Promise((resolve, reject) => {
            chrome.bookmarks.remove(bookmarkId, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Searches for bookmarks.
     * @param {string|object} query - The query string or object.
     * @returns {Promise<chrome.bookmarks.BookmarkTreeNode[]>} - The bookmarks that match the query.
     */
    searchBookmarks(query) {
        return new Promise((resolve, reject) => {
            chrome.bookmarks.search(query, (results) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(results);
                }
            });
        });
    }
}