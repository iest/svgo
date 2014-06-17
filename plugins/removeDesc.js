'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove <desc>.
 *
 * http://www.w3.org/TR/SVG/struct.html#DescriptionAndTitleElements
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author @_iest
 */
exports.fn = function(item) {

    return !item.isElem('desc');

};
