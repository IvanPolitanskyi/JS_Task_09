'use strict'
const nums = [1, 2, [[22, 0, 22, [100], 2, 55, [22, 4, [5]]], 33, 2], 3, 0, [22, 2]];

debugger;

let html = '<ul >';
function printEvents(array) {
    function getEvents(array) {

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                html += '<li type = \'none\'><ul>'
                getEvents(array[i]);
                html += '</ul></li>'
            }

            else html += '<li>' + array[i] + '</li>';
        }

        return html;
    }
    getEvents(array);
    document.write(html);
}
printEvents(nums);

