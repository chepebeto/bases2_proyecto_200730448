const express = require('express');
const cassandra = require("cassandra-driver");
const router = express.Router();
const clientOptions = {
    contactPoints: ["127.0.0.1:9042", "127.0.0.1:9042"],
    localDataCenter: 'datacenter1',
    keyspace: "sist_proyecto"
};
const client = new cassandra.Client(clientOptions);


router.get('/', async (req, res, next) => {
    res.send('Hola mundo');
});

router.get('/getInstBancaria', async (req, res, next) => {
    const query = "SELECT * from inst_bancaria"; 
    client.execute(query, (err, results) => {
        if (err) {            
          return console.error(err);
        }
    res.send(results.rows);
        //console.log(results.rows);
    });   
});


router.get('/getcuentahabiente', async (req, res, next) => {
    const query = "SELECT * from cuentahabiente"; 
    client.execute(query, (err, results) => {
        if (err) {            
          return console.error(err);
        }
    res.send(results.rows);
        //console.log(results.rows);
    });   
});


router.get('/getTransporCuentaHabiente', async (req, res, next) => {
    const query = "SELECT * from trx_by_cuentabiente"; 
    client.execute(query, (err, results) => {
        if (err) {            
          return console.error(err);
        }
    res.send(results.rows);
        //console.log(results.rows);
    });   
});

router.get('/getTransporInstitucion', async (req, res, next) => {
    const query = "SELECT * from trx_by_institucion"; 
    client.execute(query, (err, results) => {
        if (err) {            
          return console.error(err);
        }
    res.send(results.rows);
        //console.log(results.rows);
    });   
});

router.get('/getTransporClienteMes', async (req, res, next) => {
    const query = "SELECT * from trx_cliente_mes"; 
    client.execute(query, (err, results) => {
        if (err) {            
          return console.error(err);
        }
    res.send(results.rows);
        //console.log(results.rows);
    });   
});


module.exports = router;