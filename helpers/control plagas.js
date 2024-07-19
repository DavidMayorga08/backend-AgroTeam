import ControlPlagas from '../models/control plagas.js';
import Cultivos from '../models/cultivos.js';
import Empleados from '../models/empleados.js';

const controlPlagasHelper = {
    validarId: async (id) => {
        const controlPlaga = await ControlPlagas.findById(id);
        if (!controlPlaga) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdCultivo: async (id_cultivo) => {
        const cultivo = await Cultivos.findById(id_cultivo);
        if (!cultivo) {
            throw new Error(`El id de cultivo ${id_cultivo} no existe`);
        }
    },
    validarIdEmpleado: async (id_empleado) => {
        const empleado = await Empleados.findById(id_empleado);
        if (!empleado) {
            throw new Error(`El id de empleado ${id_empleado} no existe`);
        }
    },
    validarEstado: (estado) => {
        const estadosPermitidos = [0, 1];
        if (!estadosPermitidos.includes(estado)) {
            throw new Error(`El estado ${estado} no es válido`);
        }
    }
};

export default controlPlagasHelper;
