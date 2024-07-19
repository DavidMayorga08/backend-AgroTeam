import ElaboracionSustratos from '../models/elaboracion sustratos.js';

const httpElaboracionSustratos = {
    // crear una elaboracion de sustratos
    async postElaboracionSustratos(req, res) {
        const body = req.body;
        try {
            const elaboracionSustratos = await ElaboracionSustratos.create(body);
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una elaboracion de sustratos
    async putElaboracionSustratos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findByIdAndUpdate(_id, body, {new: true});
            res.json(elaboracionSustratos);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las elaboraciones de sustratos
    async getElaboracionSustratos(req, res) {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find();
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una elaboracion de sustratos por id
    async getElaboracionSustratosID(req, res) {
        const _id = req.params.id;
        const elaboracionSustratos = await ElaboracionSustratos.findById(_id);
        res.json(elaboracionSustratos);
    },

    putElaboracionSustratosActivar: async (req, res) => {
        const _id = req.params
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ elaboracionSustratos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putElaboracionSustratosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const elaboracionSustratos = await ElaboracionSustratos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ elaboracionSustratos }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getElaboracionSustratosActivos: async (req, res)=> {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find({ estado: 1 });
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getElaboracionSustratosInactivos: async (req, res)=> {
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find({ estado: 0 });
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas 
    async getElaboracionSustratosFechas(req, res) {
        const fecha1 = req.params.fecha1;
        const fecha2 = req.params.fecha2;
        try {
            const elaboracionSustratos = await ElaboracionSustratos.find({ "fecha": {"$gte": fecha1, "$lt": fecha2} });
            res.json({ elaboracionSustratos });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default httpElaboracionSustratos