const { timeStamp } = require('console');
const moongose = require('mongoose');

const ordenesSchema = new moongose.Schema({
    destino:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    fecha_creacion:{
        type: Date,
        default: ()=>new Date()
    },
    estado:{
        type: String,
        enum:['Pendiente','En transito','Entregado'],
        default: 'Pendiente'
    }

},
);

const ModelOrdenes = moongose.model('Ordenes', ordenesSchema);
module.exports = ModelOrdenes;