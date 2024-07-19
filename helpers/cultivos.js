import Cultivos from '../models/cultivos.js';
import Parcelas from '../models/parcelas.js';

const cultivosHelper = {
    validarId: async (id) => {
        const existeCultivo = await Cultivos.findById(id);
        if (!existeCultivo) {
            throw new Error('El id del cultivo no existe');
        }
    },
    validarIdParcela: async (id) => {
        const existeParcela = await Parcelas.findById(id);
        if (!existeParcela) {
            throw new Error('El id de la parcela no existe');
        }
    }
};

export default cultivosHelper;