import Insumos from '../models/insumos.js';
import Proveedores from '../models/proveedores.js';

const insumosHelper = {
    validarId: async (id) => {
        const existeInsumo = await Insumos.findById(id);
        if (!existeInsumo) {
            throw new Error('El id del insumo no existe');
        }
    },
    validarIdProveedor: async (id) => {
        const existeProveedor = await Proveedores.findById(id);
        if (!existeProveedor) {
            throw new Error('El id del proveedor no existe');
        }
    }
};

export default insumosHelper;