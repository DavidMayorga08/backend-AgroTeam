import mongoose from 'mongoose';

const SiembrasSchema = new mongoose.Schema({
    id_cultivo: {type: mongoose.Schema.Types.ObjectId, ref: 'Cultivos', required: true},
    id_empleado: {type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true},
    fechaSiembra: {type: Date, required: true},
    fechaCosecha: {type: Date, required: true},
    transplante: {type: String, required: true},
    cultivoAnterior: {type: String, required: true},
    id_inventario: {type: mongoose.Schema.Types.ObjectId, ref: 'Inventarios', required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Siembras', SiembrasSchema);