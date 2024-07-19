import Climas from "../models/climas.js"

const httpClimas = {

    getClimas: async(req, res) => {
        const clima = await Climas.find()
        res.json({clima})
    },

    getClimasID: async(req, res) => {
        const _id = req.params 
        const clima = await Climas.findById(_id)
        res.jos({clima})
    },

    postClimas: async(req, res) => {
        const body = req.body;
        try {
            const clima = await Climas.create(body)
            res.json({clima})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putClimas: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const clima = await Climas.findByIdAndUpdate(_id, body, {new: true});
            res.json(clima);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

    putClimasActivar: async (req, res) => {
        const _id = req.params
        try {
            const clima = await Climas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ clima }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putClimasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const clima = await Climas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ clima }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    
    getClimasActivos: async (req, res)=> {
        try {
            const clima = await Climas.find({ estado: 1 });
            res.json({ clima });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getClimasInactivos: async (req, res)=> {
        try {
            const clima = await Climas.find({ estado: 0 });
            res.json({ clima });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    //listar entre fechas 
    getClimasFecha: async (req, res) => {
        const fecha = req.params.fecha
        const fecha2 = req.params.fecha2
        const clima = await Climas.find({fecha: {$gte: fecha, $lte: fecha2}})
        res.json({clima})
    },
    //listar proemdio de temperatura
    getClimasTemperatura: async (req, res) => {
        const temperatura = req.params.temperatura
        const clima = await Climas.find({temperatura: {$gte: temperatura}})
        res.json({clima})
    },
    //listar por tipo de clima
    getClimasTipo: async (req, res) => {
        const tipoClima = req.params.tipoClima
        const clima = await Climas.find({tipoClima: tipoClima})
        res.json({clima})
    },
}

export default httpClimas