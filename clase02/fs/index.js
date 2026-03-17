const fs = require('fs');
const folderName = process.argv[2] || 'project'
console.log(folderName)

fs.mkdirSync(folderName)
fs.mkdirSync(`${folderName}/img`)
fs.writeFileSync(
  `${folderName}/index.html`,
  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>
<body>
    
</body>
</html>
    
`,
);
fs.writeFileSync(
  `${folderName}/app.js`,
  `
console.log("Hello world")    
`,
);
fs.writeFileSync(
  `${folderName}/style.css`,
  `body{
    background-color: aquamarine;
}`,
);
