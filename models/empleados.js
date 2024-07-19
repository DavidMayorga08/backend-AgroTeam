import mongoose from 'mongoose';

const EmpleadosSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
    telefono: {type: String, required: true},
    estudios: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: Number, required: true}
});

export default mongoose.model('Empleados', EmpleadosSchema);