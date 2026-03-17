const fs = require('fs');

//console.log(fs)

//process.argv[0] // node
//process.argv[1] // index
//console.log(process.argv[2]) 
const folderName = process.argv[2] || 'project'
console.log(folderName)

fs.mkdirSync(folderName)
fs.mkdirSync(`${folderName}/img`)
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/app.js`, '')
fs.writeFileSync(`${folderName}/style.css`, '')
