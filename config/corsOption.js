//config/corsConfig.js

const corsOptions = {
    origin: ['http://localhost:3000' ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],

};

module.exports = corsOptions;