"use strict";

module.exports = function (obj) {
  var keys = []
  var iterate = function (o, stack) {
    for (var property in o) {
      if (!o.hasOwnProperty(property)) continue
      var keyName = stack ? stack + "." + property : property
      var value = o[property]
      if (typeof value == "object" && !isEmpty(value)) {
        iterate(value, keyName);
      } else {
        keys.push(keyName)
      }
    }
  }
  iterate(obj, "")
  return keys
}

var isEmpty = function (obj) {
  return Object.keys(obj).length == 0
}
