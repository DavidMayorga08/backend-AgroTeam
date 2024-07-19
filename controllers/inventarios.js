import Inventarios from '../models/inventarios.js';

const httpinventarios = {

    async postinventarios (req, res){
        const body = req.body;
        try {
            const inventarios = await Inventarios.create (body);
            res.json({inventarios});
        } catch (error){
            res.status(500),json({error: error.message});
        }
    },

    async putinventarios (req, res) {
        const _id = req.params.id;
        const body =req.body;
        try {
            const inventarios = await Inventarios.findByIdAndUpdate(_id, body, {new:true});
            res,json(inventarios);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    async getinventarios(req, res){
        try {
            const inventarios = await Inventarios.find();
            res.json({inventarios});
        } catch (error){
            res,status(500).json ({error:error.message});
        }
    },

    async getinventariosID (req, res) {
        const _id = req.params.id; 
        const inventarios =await Inventarios.findById(_id);
        res.json(inventarios);
    },

    putInventariosActivar: async (req, res) => {
        const _id = req.params
        try {
            const inventarios = await Inventarios.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ inventarios }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putInventariosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const inventarios = await Inventarios.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ inventarios }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    getInventariosActivos: async (req, res)=> {
        try {
            const inventarios = await Inventarios.find({ estado: 1 });
            res.json({ inventarios });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getInventariosInactivos: async (req, res)=> {
        try {
            const inventarios = await Inventarios.find({ estado: 0 });
            res.json({ inventarios });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

export default httpinventarios