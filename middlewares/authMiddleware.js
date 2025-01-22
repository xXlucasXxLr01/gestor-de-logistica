//token secreto
const TOKEN_SECRETO= 'secreto';

//middleware de autorizacion
const autoMiddleware = (req, res, next) =>{
    const token= req.headers['authorization'];
if(token === TOKEN_SECRETO){
    next();//si es correcto el token, la solicitud continua
}else{
    res.status(403).send
({mensaje: 'Acceso denegado: Token invalido o ausente'})
}
};

module.exports = autoMiddleware;
