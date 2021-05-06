const express = require('express');
var cors = require('cors');

const app = express();
//Configuración
app.set('port', 3030);


//Middlewares
app.use(express.json());

//Rutas
app.use(cors())
app.use(require('./routes/rutas'));

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});