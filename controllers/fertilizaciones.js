import Fertilizaciones from "../models/fertilizaciones.js"

const httpFertilizaciones = {

    getFertilizaciones: async(req, res) => {
        const fertilizacion = await Fertilizaciones.find()
        res.json({fertilizacion})
    },


    getFertilizacionesID: async(req, res) => {
        const _id = req.params 
        const fertilizacion = await Fertilizaciones.findById(_id)
        res.jos({fertilizacion})
    },

    postFertilizaciones: async(req, res) => {
        const body = req.body;
        try {
            const fertilizacion = await Fertilizaciones.create(body)
            res.json({fertilizacion})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putFertilizaciones: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const fertilizacion = await Fertilizaciones.findByIdAndUpdate(_id, body, {new: true});
            res.json(fertilizacion);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

    putFertilizacionesActivar: async (req, res) => {
        const _id = req.params
        try {
            const fertilizaciones = await Fertilizaciones.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ fertilizaciones }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putFertilizacionesDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const fertilizaciones = await Fertilizaciones.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ fertilizaciones }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getFertilizacionesActivos: async (req, res)=> {
        try {
            const fertilizaciones = await Fertilizaciones.find({ estado: 1 });
            res.json({ fertilizaciones });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getFertilizacionesInactivos: async (req, res)=> {
        try {
            const fertilizaciones = await Fertilizaciones.find({ estado: 0 });
            res.json({ fertilizaciones });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas
    getFertilizacionesEntreFechas: async (req, res) => {
        const fecha1 = req.params.fecha1;
        const fecha2 = req.params.fecha2;
        try {
            const fertilizaciones = await Fertilizaciones.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
            res.json({ fertilizaciones });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


export default httpFertilizaciones