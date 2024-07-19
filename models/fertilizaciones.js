import mongoose from 'mongoose';

const FertilizacionesSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    fecha: {type: Date, required: true},
    estadoFenologico: {type: String, required: true}, // inicial,floración,cosecha
    tipo: {type: String, required: true}, // antes, despues de siembra
    nombreFertilizante: {type: String, required: true},
    cantidad: {type: Number, required: true},
    id_inventario: {type: mongoose.Schema.Types.ObjectId, ref: 'Inventarios', required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Fertilizaciones', FertilizacionesSchema);