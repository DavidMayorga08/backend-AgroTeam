import PreparacionSuelos from "../models/preparacion suelos.js"

const httpPreparacionSuelos = {

    getPreparacionSuelos: async (req,res) => {
        const preparacionSuelos = await PreparacionSuelos.find()
        res.json ({preparacionSuelos})
    },

    getPreparacionSuelosID: async (req, res) => {
        const _id = req.params
        const preparacionSuelos = await PreparacionSuelos.findById(_id)
        res.json({preparacionSuelos})
    },

    postPreparacionSuelos: async (req, res) => {
        const body = req.body;
        try {
            const preparacionSuelos = await PreparacionSuelos.create(body);
            res.json({ preparacionSuelos });
        } catch (error) {
            res.status(400).json({ error: "No se pudo crear el registro" })
        }
    },

    putPreparacionSuelos: async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const preparacionSuelos = await PreparacionSuelos.findByIdAndUpdate(_id, body, {new: true});
            res.json(preparacionSuelos);
        }
        catch (error) {
            res.status(400).json({ error: "No se pudo modificar el registro" })
        }
    },
    putPreparacionSuelosActivar: async (req, res) => {
        const _id = req.params
        try {
            const preparacionSuelos = await PreparacionSuelos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ preparacionSuelos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putPreparacionSuelosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const preparacionSuelos = await PreparacionSuelos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ preparacionSuelos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getPreparacionSuelosActivos: async (req, res)=> {
        try {
            const preparacionSuelos = await PreparacionSuelos.find({ estado: 1 });
            res.json({ preparacionSuelos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getPreparacionSuelosInactivos: async (req, res)=> {
        try {
            const preparacionSuelos = await PreparacionSuelos.find({ estado: 0 });
            res.json({ preparacionSuelos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas
    getPreparacionSuelosEntreFechas: async (req, res) => {
        const fecha1 = req.params.fecha1
        const fecha2 = req.params.fecha2
        try {
            const preparacionSuelos = await PreparacionSuelos.find({ fecha: { $gte: fecha1, $lte: fecha2 } })
            res.json({ preparacionSuelos })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default httpPreparacionSuelos