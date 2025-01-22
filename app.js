const express =require('express');
const app = express();
const dbconnect = require('./config/db');
const ordenesRouter = require('./routes/ordenes')

//milldewares
const errorMiddleware = require('./middlewares/errorMiddlewares');
const nofoundMiddleware = require('./middlewares/nofoundMiddewares');
const loggingMiddleware= require('./middlewares/loggingMiddleware')

//cors

const cors = require('cors');
const corsOptions= require('./config/corsOption');


app.use(cors(corsOptions));

app.use(express.json());
app.use(ordenesRouter);

app.use(errorMiddleware);
app.use(nofoundMiddleware)
app.use(loggingMiddleware);

dbconnect().then(()=>{
    app.listen(3000, ()=>{
    console.log('el servidor esta conectado en el puerto 3000');
});
}).catch((err)=>{
    console.log('No se pudo conectar a la base de datos ', err);
});
