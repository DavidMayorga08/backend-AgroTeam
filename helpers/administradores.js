import Administradores from '../models/administradores.js';

const administradoresHelper = {
    validarId: async (id) => {
        const administrador = await Administradores.findById(id);
        if (!administrador) {
            throw new Error(`El id ${id} no existe`);
        }
    }
}

export default administradoresHelper;