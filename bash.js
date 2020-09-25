const prompt = process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const pwd = require("./pwd.js");
  const ls = require("./ls.js");
  const cat = require("./cat.js");
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls;
  } else if (cmd.slice(0, 3) === "cat") {
    let fileName = cmd.slice(4);
    cat(fileName, prompt);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
