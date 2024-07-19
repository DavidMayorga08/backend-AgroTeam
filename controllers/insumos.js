import Insumos from "../models/insumos.js"

const httpInsumos = {

    getInsumos: async (req,res) => {
        const insumos = await Insumos.find()
        res.json ({insumos})
    },

    getInsumosID: async (req, res) => {
        const _id = req.params
        const insumos = await Insumos.findById(_id)
        res.json({insumos})
    },

    postInsumos: async (req, res) => {
        const body = req.body;
        try {
            const insumos = await Insumos.create(body);
            res.json({ insumos });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putInsumos: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const insumos = await Insumos.findByIdAndUpdate(_id, body, {new: true});
            res.json(insumos);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

    putInsumosActivar: async (req, res) => {
        const _id = req.params
        try {
            const insumos = await Insumos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ insumos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putInsumosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const insumos = await Insumos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ insumos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    getInsumosActivos: async (req, res)=> {
        try {
            const insumos = await Insumos.find({ estado: 1 });
            res.json({ insumos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getInsumosInactivos: async (req, res)=> {
        try {
            const insumos = await Insumos.find({ estado: 0 });
            res.json({ insumos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

}
export default httpInsumos