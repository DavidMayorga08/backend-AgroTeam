import Compradores from "../models/compradores.js";
import Produccion from "../models/producciones.js";

const compradoresHelper = {
    validarId: async (id) => {
        const comprador = await Compradores.findById(id);
        if (!comprador) {
            throw new Error(`El id ${id} no existe`);
        }
    },

    validarIdProduccion: async (id) => {
        const produccion = await Produccion.findById(id);
        if (!produccion) {
            throw new Error(`El id ${id} no existe`);
        }
    }
}

export default compradoresHelper;