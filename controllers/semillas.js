import Semillas from "../models/semillas.js"

const httpSemillas = {

    getSemillas: async (req,res) => {
        const semillas = await Semillas.find()
        res.json ({semillas})
    },

    getSemillasID: async (req, res) => {
        const _id = req.params
        const semillas = await Semillas.findById(_id)
        res.json({semillas})
    },

    postSemillas: async (req, res) => {
        const body = req.body;
        try {
            const semillas = await Semillas.create(body);
            res.json({ semillas });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putSemillas: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const semillas = await Semillas.findByIdAndUpdate(_id, body, {new: true});
            res.json(semillas);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },

    putSemillasActivar: async (req, res) => {
        const _id = req.params
        try {
            const semillas = await Semillas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ semillas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putSemillasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const semillas = await Semillas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ semillas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getSemillasActivas: async (req, res) => {
        const semillas = await Semillas.find({estado: 1})
        res.json({semillas})
    },

    getSemillasInactivas: async (req, res) => {
        const semillas = await Semillas.find({estado: 0})
        res.json({semillas})
    },
    // listar por id de proveedor
    async getSemillasProveedor(req, res) {
        const _id = req.params.id;
        const semillas = await Semillas.find({proveedor: _id});
        res.json(semillas);
    }
}
export default httpSemillas