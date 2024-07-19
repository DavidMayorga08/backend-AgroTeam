import AnalisisSuelo from '../models/analisis suelos.js';
import Parcelas from '../models/parcelas.js';
import Empleados from '../models/empleados.js';

const administradoresHelper = {
    validarId: async (id) => {
        const analisisSuelo = await AnalisisSuelo.findById(id);
        if (!analisisSuelo) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdParcela: async (id) => {
        const parcela = await Parcelas.findById(id);
        if (!parcela) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdEmpleado: async (id) => {
        const empleado = await Empleados.findById(id);
        if (!empleado) {
            throw new Error(`El id ${id} no existe`);
        }
    }
}

export default administradoresHelper;