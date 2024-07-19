import mongoose from 'mongoose';

const AdministradoresSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    municipio: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Administradores', AdministradoresSchema);