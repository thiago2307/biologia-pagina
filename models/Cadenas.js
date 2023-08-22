const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CadenasSchema = new Schema({
    la_cadena: {
        type: String, 
        require: true
    },
    fecha_hora: {
        type: Date,
        require: true
    }
});

const Cadena = mongoose.model('Cadenas', CadenasSchema);

module.exports = Cadena;
