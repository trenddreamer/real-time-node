function say(filename) {
  return (contents = fs.readFileSync(filename));
}
var fs = require("fs");
module.exports.say = say;
