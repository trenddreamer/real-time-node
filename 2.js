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

var hello = require("./helloworld2.js");

hello
  .say(args.file)
  .val(function(contents) {
    console.log(contents.toString());
  })
  .or(function(err) {
    console.error("Error: " + err);
  });
