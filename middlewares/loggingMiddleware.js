const loggingMiddleware=(req, res, next) => {
    const method= req.method;
    const url= req.url;
    const time = new Date().toLocaleString();//fecha y hora de la solicitud

    console.log(`[${time}] ${method} ${url}`); // Registramos la información en la consola
 next();//pasa a la siguiente middeleware o ruta
}
module.exports = loggingMiddleware;
