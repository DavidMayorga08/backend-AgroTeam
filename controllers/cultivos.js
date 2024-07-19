import Cultivos from '../models/cultivos.js';

const httpCultivos = {
    // crear un cultivo
    async postCultivos(req, res) {
        const body = req.body;
        try {
            const cultivo = await Cultivos.create(body);
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un cultivo
    async putCultivos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const cultivo = await Cultivos.findByIdAndUpdate(_id, body, {new: true});
            res.json(cultivo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los cultivos
    async getCultivos(req, res) {
        try {
            const cultivo = await Cultivos.find();
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un cultivo por id
    async getCultivosID(req, res) {
        const _id = req.params.id;
        const cultivo = await Cultivos.findById(_id);
        res.json(cultivo);
    },
    
    putCultivosActivar: async (req, res) => {
        const _id = req.params
        try {
            const cultivo = await Cultivos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ cultivo }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putCultivosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const cultivo = await Cultivos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ cultivo }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    getCultivosActivos: async (req, res)=> {
        try {
            const cultivo = await Cultivos.find({ estado: 1 });
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getCultivosInactivos: async (req, res)=> {
        try {
            const cultivo = await Cultivos.find({ estado: 0 });
            res.json({ cultivo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
       // Listar cultivos por tipo
    async getCultivosPorTipo(req, res) {
      const tipo = req.params.tipo;
      try {
         const cultivo = await Cultivos.find({ tipo: tipo });
            res.json({ cultivo });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
          },

};

export default httpCultivos