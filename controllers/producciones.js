import Produccion from '../models/producciones.js';

const httpProducciones = {
    // crear una produccion
    async postProducciones(req, res) {
        const body = req.body;
        try {
            const produccion = await Produccion.create(body);
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una produccion
    async putProducciones(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const produccion = await Produccion.findByIdAndUpdate(_id, body, {new: true});
            res.json(produccion);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las producciones
    async getProducciones(req, res) {
        try {
            const produccion = await Produccion.find();
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una produccion por id
    async getProduccionesID(req, res) {
        const _id = req.params.id;
        const produccion = await Produccion.findById(_id);
        res.json(produccion);
    },

    putProduccionesActivar: async (req, res) => {
        const _id = req.params
        try {
            const produccion = await Produccion.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ produccion }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putProduccionesDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const produccion = await Produccion.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ produccion }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    getProduccionesActivos: async (req, res)=> {
        try {
            const produccion = await Produccion.find({ estado: 1 });
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getProduccionesInactivos: async (req, res)=> {
        try {
            const produccion = await Produccion.find({ estado: 0 });
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas
    async getProduccionesFechas(req, res) {
        const fecha1 = req.params.fecha1;
        const fecha2 = req.params.fecha2;
        try {
            const produccion = await Produccion.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar por cultivo
    async getProduccionesCultivo(req, res) {
        const id_cultivo = req.params.id_cultivo;
        try {
            const produccion = await Produccion.find({ id_cultivo: id_cultivo });
            res.json({ produccion });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default httpProducciones