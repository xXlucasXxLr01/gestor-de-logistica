const mongose = require('mongoose');
const dbconnect =  async () => {
    try{
        await mongose.connect('mongodb://localhost:27017/dbGOLogistica')
            console.log('conectado a la base de datos');

        } catch (error) {
            console.error('Error de coneccion a la base de datos', error);
            ;
        }
    }
module.exports = dbconnect;
