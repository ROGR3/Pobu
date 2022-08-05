const fs = require("fs")
const NEW_VERSION = "0.1.1"
let paths = ["package.json", "package-lock.json", "./app/package.json", "./app/package-lock.json"]
for (let i = 0; i < paths.length; ++i) {
  let data = JSON.parse(fs.readFileSync(paths[i], "utf-8"))
  data.version = NEW_VERSION
  fs.writeFileSync(paths[i], JSON.stringify(data))
  console.log("File " + paths[i] + " done!")
}
