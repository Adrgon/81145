Metodos / Methods
GET -> pedir informacion
POST -> crear algo nuevo
PUT / PATCH -> actualizar
DELETE -> eliminar

Codigos de estado / Status Codes
200 -> todo salio bien
201 -> se creo correctamente
400 -> el cliente mando algo mal
404 -> no se encontro lo que buscaba
500 -> error del servidor

👉 El status code es como backend le explica al frontend que paso. 

Flujo completo 
1. Llegada la request
2. Pasa el middleware
3. Llega a la ruta
4. Envia la respuesta
