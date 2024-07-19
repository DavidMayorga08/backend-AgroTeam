import Fincas from '../models/fincas.js';
import Administradores from '../models/administradores.js';

const fincasHelper = {
    validarId: async (id) => {
        const finca = await Fincas.findById(id);
        if (!finca) {
            throw new Error(`El ID ${id} no existe`);
        }
    },

    validarIdAdministrador: async (id_administrador) => {
        const administrador = await Administradores.findById(id_administrador);
        if (!administrador) {
            throw new Error(`El ID de administrador ${id_administrador} no existe`);
        }
    }
};

export default fincasHelper;
