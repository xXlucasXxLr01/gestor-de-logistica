const express= require('express');
const router= express.Router();
const ModelOrdenes = require('../models/ordenesmodels');
const errorMiddleware = require('../middlewares/errorMiddlewares');

//todas las ordenes
router.get('/ordenes', async (req, res, next)=>{
    try{
        const {estado}= req.query;
        const filtro=estado ? {estado}:{};
        const ordenes= await ModelOrdenes.find(filtro);
        res.status(200).json(ordenes);
    }catch(error){
        next(errorMiddleware)
}
})

// una orden por id
router.get('/ordenes/:id', async (req, res)=>{
    try{
        const ordenes= await ModelOrdenes.findById(req.params.id);

        if(!ordenes){
            res.status(404).json({mensaje: 'orden no encontrada'});
        }res.status(200).json(ordenes);
    }catch(error){
        next(errorMiddleware)};
});

//agregar una orden
router.post('/ordenes', async (req, res)=>{
    const body= req.body;
    try{
        const nuevaOrden= await ModelOrdenes.create(body);
        res.status(201).send(nuevaOrden);
    }catch(error){
        next(errorMiddleware)
    }
})

//actualizar una orden
router.put('/ordenes/:id', async (req, res)=>{
    try{
        const ordenActualizada= await ModelOrdenes.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true});
        console.log("Orden Actualizada", ordenActualizada);
        if(!ordenActualizada){
            return res.status(404).send({mensaje: 'Orden no encontrada'});
        }
        res.status(200).send(ordenActualizada);
    }catch(error){
        res.status(400).send({mensaje:'Error al actualizar la orden',error});
    }
})


//eliminar una orden

router.delete('/ordenes/:id', async (req, res)=>{
    try{
        const ordenEliminada= await ModelOrdenes.findByIdAndDelete(req.params.id);
        if(!ordenEliminada){
            return res.status(404).send({mensaje: 'Orden no encontrada'});
        }
        res.status(200).send(ordenEliminada);
        console.log('Se elimino Orden', ordenEliminada);
    }catch(error){
        res.status(500).send({mensaje: 'Error al eliminar la orden', error})
    }
});













module.exports = router;