import Fertilizaciones from '../models/fertilizaciones.js';
import Cultivos from '../models/cultivos.js';
import Empleados from '../models/empleados.js';
import Inventarios from '../models/inventarios.js';

const fertilizacionesHelper = {
    validarId: async (id) => {
        const fertilizacion = await Fertilizaciones.findById(id);
        if (!fertilizacion) {
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

    validarIdInventario: async (id_inventario) => {
        const inventario = await Inventarios.findById(id_inventario);
        if (!inventario) {
            throw new Error(`El id de inventario ${id_inventario} no existe`);
        }
    }
}

export default fertilizacionesHelper;
