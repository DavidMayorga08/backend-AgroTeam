import Factura from '../models/facturas.js';
import Inventarios from '../models/inventarios.js';
import Compradores from '../models/compradores.js';

const facturasHelper = {
    validarId: async (id) => {
        const factura = await Factura.findById(id);
        if (!factura) {
            throw new Error(`El id ${id} no existe`);
        }
    },
    validarIdInventario: async (id_inventario) => {
        const inventario = await Inventarios.findById(id_inventario);
        if (!inventario) {
            throw new Error(`El id de inventario ${id_inventario} no existe`);
        }
    },
    validarIdComprador: async (id_comprador) => {
        const comprador = await Compradores.findById(id_comprador);
        if (!comprador) {
            throw new Error(`El id de comprador ${id_comprador} no existe`);
        }
    },
    validarEstado: (estado) => {
        const estadosPermitidos = [0, 1];
        if (!estadosPermitidos.includes(estado)) {
            throw new Error(`El estado ${estado} no es válido`);
        }
    }
};

export default facturasHelper;
