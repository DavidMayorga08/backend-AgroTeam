import Gastos from '../models/gastos.js';
import Insumos from '../models/insumos.js';
import Semillas from '../models/semillas.js';
import Mantenimientos from '../models/mantenimientos.js';

const gastosHelper = {
    validarId: async (id) => {
        const gasto = await Gastos.findById(id);
        if (!gasto) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdInsumo: async (id_insumo) => {
        const insumo = await Insumos.findById(id_insumo);
        if (!insumo) {
            throw new Error(`El id de insumo ${id_insumo} no existe`);
        }
    },

    validarIdSemilla: async (id_semilla) => {
        const semilla = await Semillas.findById(id_semilla);
        if (!semilla) {
            throw new Error(`El id de semilla ${id_semilla} no existe`);
        }
    },

    validarIdMantenimiento: async (id_mantenimiento) => {
        const mantenimiento = await Mantenimientos.findById(id_mantenimiento);
        if (!mantenimiento) {
            throw new Error(`El id de mantenimiento ${id_mantenimiento} no existe`);
        }
    }
};

export default gastosHelper;
