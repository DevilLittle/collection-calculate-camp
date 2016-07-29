'use strict';
let _ = require('lodash');
function average_uneven(collection) {
  return _
    .chain(collection)
    .filter(n=>n % 2 === 1)
    .mean()
    .value();
}

module.exports = average_uneven;
