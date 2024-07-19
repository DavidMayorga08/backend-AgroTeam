import Siembras from '../models/siembras.js';

const httpSiembras = {
    // crear una siembra
    async postSiembras(req, res) {
        const body = req.body;
        try {
            const siembra = await Siembras.create(body);
            res.json({ siembra });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una siembra
    async putSiembras(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const siembra = await Siembras.findByIdAndUpdate(_id, body, {new: true});
            res.json(siembra);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las siembras
    async getSiembras(req, res) {
        try {
            const siembra = await Siembras.find();
            res.json({ siembra });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una siembra por id
    async getSiembrasID(req, res) {
        const _id = req.params.id;
        const siembra = await Siembras.findById(_id);
        res.json(siembra);
    },

    putSiembrasActivar: async (req, res) => {
        const _id = req.params
        try {
            const siembras = await Siembras.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ siembras }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putSiembrasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const siembras = await Siembras.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ siembras }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    async getSiembrasActivas(req, res) {
        try {
            const siembras= await Siembras.find({ estado: 1 });
            res.json({ siembras });
        } catch (error) {
              res.status(500).json({ error: error.message });
          }
       },

     // listar Siembras inactivas
    async getSiembrasInactivas(req, res) {
      try {
            const siembras = await Siembras.find({ estado: 0 });
             res.json({ siembras });
         } catch (error) {
              res.status(500).json({ error: error.message });
          }
      },
};

export default httpSiembras