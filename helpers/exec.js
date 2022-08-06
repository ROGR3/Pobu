const { compile } = require('nexe')

compile({
  input: '../app/index.js',
  output: '../app/pobu',
  build: true

}).then(() => {
  console.log('success')
})
// pkg index.js --targets node16-win-x64 --compress GZip --out-path ./app