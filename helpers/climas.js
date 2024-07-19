import Climas from "../models/climas.js";
import Fincas from "../models/fincas.js";
import Empleados from "../models/empleados.js";

const climasHelper = {
    validarId: async (id) => {
        const clima = await Climas.findById(id);
        if (!clima) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdFinca: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
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

export default climasHelper;