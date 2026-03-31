// los paquetes que se van a usar. 
const fs = require('fs');
const http = require('http');

// Los metodos para manejos de las notas. 

//leer
function readNotes(){
    try {
        const data = fs.readFileSync('notas.json', 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        console.log('Error. al leer las notas:', error);
        return [];
    }
}

// crear una nota
function saveNotes(notes){
    try {
        fs.writeFileSync('notas.json', JSON.stringify(notes, null, 2));
    } catch (error) {
        console.log('Error al guardar las notas:', error);
    }
}

// editar 

// borrar


// El servidor 
const server = http.createServer((req, res)=>{
  res.setHeader("Content-Type", "application/json");

  // Enrutador
  try {
  if(req.url === "/" && req.method === 'GET') {
    res.end(JSON.stringify({message: "Servidor funcionando"}));
    return;
  }
  if(req.url === '/notes' && req.method === 'GET') {
    const notes = readNotes()
    res.end(JSON.stringify(notes))
    return 
  }

  if(req.url === '/notes/add' && req.method === 'GET') {
    const notes = readNotes();

    const newNote = {
        id: Date.now(),
        title: "Nota de ejemplo", 
        content: "Contenido desde el servidor"
    };

    notes.push(newNote);
    saveNotes(notes)

    res.end(JSON.stringify({
        message: 'Nota creada',
        note: newNote
    }))
   return; 
  }
  if(req.url === '/notes/edit' && req.method === 'GET') {
    return 
  }
  if(req.url === '/notes/delete' && req.method === 'GET') {
    return
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Ruta no encontrada" }));

  } catch(error) {
    console.log('Error en el servidor :', error);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Error interno" }));
  }  

})



// El servidor escuchando en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})
