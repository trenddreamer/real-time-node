function printHelp() {
  console.log("1.js (c) Barry West");
  console.log("");
  console.log("Usage:");
  console.log("--help                 print this help");
  console.log(
    "--file={NAME}               read the file of {NAME} and output it"
  );
}

var args = require("minimist")(process.argv.slice(2), { string: "file" });

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js");

hello.say(args.file, function(err, contents) {
  if (err) {
    console.error("Error: " + err);
  } else {
    console.log(contents.toString());
  }
});
