const fs = require("fs");
const { builtinModules } = require("module");

module.exports = (fileName) => {
  fs.readFile(fileName, "utf8", (err, contents) => {
    if (err) throw err;
    else {
      process.stdout.write(contents);
      process.stdout.write("\nprompt > ");
    }
  });
};
