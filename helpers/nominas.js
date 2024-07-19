import Nominas from '../models/nominas.js';
import Empleados from '../models/empleados.js';

const nominasHelper = {
    validarId: async (id) => {
        const existeId = await Nominas.findById(id);
        if (!existeId) {
            throw new Error(`El ID ${id} no existe en la base de datos`);
        }
    },
    validarIdEmpleado: async (id_empleado) => {
        const existeEmpleado = await Empleados.findById(id_empleado);
        if (!existeEmpleado) {
            throw new Error(`El ID de empleado ${id_empleado} no existe en la base de datos`);
        }
    }
};

export default nominasHelper;
