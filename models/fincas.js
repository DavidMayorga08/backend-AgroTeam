import mongoose from 'mongoose';

const FincasSchema = new mongoose.Schema({
    id_administrador: {type: mongoose.Schema.Types.ObjectId, ref: 'Administradores', required: true},
    nombre: {type: String, required: true},
    rut: {type: String, required: true},
    direccion: {type: String, required: true},
    ubicacionGeografica: {type: String, required: true},
    limitesPredios: {type: String, required: true},
    area: {type: Number, required: true},
    ciudad: {type: String, required: true},
    departamento: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Fincas', FincasSchema);