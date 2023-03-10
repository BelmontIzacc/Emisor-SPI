const mongoose = require('mongoose')

const periodo_absorcion_nutrientes = mongoose.Schema({
    id_tipo_cultivo: String,
    parametro_N: Number,
    parametro_P: Number,
    parametro_K: Number,
    parametro_humedad: Number,
    id_tiempo_duracion: String,
    creacion: Date,
    actualizacion: Date,
    periodo: Number
})

module.exports = mongoose.model('periodo_absorcion_nutrientes', periodo_absorcion_nutrientes, 'periodo_absorcion_nutrientes')