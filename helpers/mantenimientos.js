import Mantenimientos from '../models/mantenimientos.js';
import Gastos from '../models/gastos.js';
import MaquinariaHerramientas from '../models/maquinaria&herramientas.js';

const mantenimientosHelper = {
    validarId: async (id) => {
        const mantenimiento = await Mantenimientos.findById(id);
        if (!mantenimiento) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdGasto: async (id_gastos) => {
        const gasto = await Gastos.findById(id_gastos);
        if (!gasto) {
            throw new Error(`El id de gasto ${id_gastos} no existe`);
        }
    },

    validarIdHerramienta: async (id_herramienta) => {
        const herramienta = await MaquinariaHerramientas.findById(id_herramienta);
        if (!herramienta) {
            throw new Error(`El id de herramienta ${id_herramienta} no existe`);
        }
    }
}

export default mantenimientosHelper;
