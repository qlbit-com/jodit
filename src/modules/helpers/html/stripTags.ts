/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/**
 * Extract plain text from HTML text
 *
 * @param html
 */
export const stripTags = (html: string): string => {
    const tmp: HTMLDivElement = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || '';
};
