const fs = require('fs')


const notas = [
    {id: 1, nota: "Ir a jugar al futbol"},
    {id: 2, nota: "Ir al dentista"}
]


// Guardar las notas en un archivo JSON
fs.writeFileSync('notas.json', JSON.stringify(notas, null, 2))


const data = fs.readFileSync('notas.json', 'utf-8')
console.log(data)
