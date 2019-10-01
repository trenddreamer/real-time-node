function say(filename, cb) {
  return (contents = fs.readFile(filename, function(err, contents) {
    if (err) {
      cb(err);
    } else {
      setTimeout(function() {
        cb(null, contents);
      }, 2000);
    }
  }));
}
var fs = require("fs");

module.exports.say = say;
