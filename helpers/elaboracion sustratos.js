import ElaboracionSustratos from '../models/elaboracion sustratos.js';
import Procesos from '../models/procesos.js';
import Empleados from '../models/empleados.js'

const elaboracionSustratosHelper = {
    validarId: async (id) => {
        const existeElaboracionSustratos = await ElaboracionSustratos.findById(id);
        if (!existeElaboracionSustratos) {
            throw new Error('El id de la elaboracion de sustratos no existe');
        }
    },
    validarIdProceso: async (id) => {
        const existeProceso = await Procesos.findById(id);
        if (!existeProceso) {
            throw new Error('El id del proceso no existe');
        }
    },
    validarIdEmpleado: async (id) => {
        const existeEmpleado = await Empleados.findById(id);
        if (!existeEmpleado) {
            throw new Error('El id del empleado no existe');
        }
    }
};

export default elaboracionSustratosHelper;