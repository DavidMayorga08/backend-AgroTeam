import MaquinariaHerramientas from '../models/maquinaria&herramientas.js';
import Proveedores from '../models/proveedores.js';

const maquinariaHerramientasHelper = {
    validarId: async (id) => {
        const existeMaquinariaHerramientas = await MaquinariaHerramientas.findById(id);
        if (!existeMaquinariaHerramientas) {
            throw new Error('El id de la maquinaria o herramienta no existe');
        }
    },
    validarIdProveedor: async (id) => {
        const existeProveedor = await Proveedores.findById(id);
        if (!existeProveedor) {
            throw new Error('El id del proveedor no existe');
        }
    }
};

export default maquinariaHerramientasHelper;