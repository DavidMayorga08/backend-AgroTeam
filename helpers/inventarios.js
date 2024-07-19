import Inventarios from '../models/inventarios.js';
import Semillas from '../models/semillas.js';
import Insumos from '../models/insumos.js';
import MaquinariaHerramientas from '../models/maquinaria&herramientas.js';

const inventariosHelper = {
    validarId: async (id) => {
        const existeInventario = await Inventarios.findById(id);
        if (!existeInventario) {
            throw new Error('El id del inventario no existe');
        }
    },
    validarIdSemillas: async (id) => {
        const existeSemilla = await Semillas.findById(id);
        if (!existeSemilla) {
            throw new Error('El id de la semilla no existe');
        }
    },
    validarIdInsumos: async (id) => {
        const existeInsumo = await Insumos.findById(id);
        if (!existeInsumo) {
            throw new Error('El id del insumo no existe');
        }
    },
    validarIdMaquina: async (id) => {
        const existeMaquina = await MaquinariaHerramientas.findById(id);
        if (!existeMaquina) {
            throw new Error('El id de la maquinaria o herramienta no existe');
        }
    }
};

export default inventariosHelper;