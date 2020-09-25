const fs = require("fs");
const { builtinModules } = require("module");

module.exports = fs.readdir("./", "utf8", (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join("\n"));
    process.stdout.write("\nprompt > ");
  }
});
