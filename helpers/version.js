const fs = require("fs")

const LAST_VERSION = "0.1.1"
const NEW_VERSION = "0.1.2"

const MD_PATHS = ["Readme.md"]

for (let i = 0; i < MD_PATHS.length; ++i) {
  let data = fs.readFileSync(MD_PATHS[i], "utf-8")
  const regex = new RegExp(LAST_VERSION, "g")
  fs.writeFileSync(MD_PATHS[i], data.replace(regex, NEW_VERSION))
  console.log("File " + MD_PATHS[i] + " done!")
}

const JSON_PATHS = ["package.json", "package-lock.json", "./app/package.json", "./app/package-lock.json"]

for (let i = 0; i < JSON_PATHS.length; ++i) {
  let data = JSON.parse(fs.readFileSync(JSON_PATHS[i], "utf-8"))
  data.version = NEW_VERSION
  fs.writeFileSync(JSON_PATHS[i], JSON.stringify(data))
  console.log("File " + JSON_PATHS[i] + " done!")
}
