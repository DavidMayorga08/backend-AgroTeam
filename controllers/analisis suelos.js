import AnalisisSuelo from '../models/analisis suelos.js';

const httpAnalisisSuelos = {
    // crear un analisis de suelo
    async postAnalisisSuelos(req, res) {
        const body = req.body;
        try {
            const analisisSuelo = await AnalisisSuelo.create(body);
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un analisis de suelo
    async putAnalisisSuelos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const analisisSuelo = await AnalisisSuelo.findByIdAndUpdate(_id, body, {new: true});
            res.json(analisisSuelo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los analisis de suelo
    async getAnalisisSuelos(req, res) {
        try {
            const analisisSuelo = await AnalisisSuelo.find();
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un analisis de suelo por id
    async getAnalisisSuelosID(req, res) {
        const _id = req.params.id;
        const analisisSuelo = await AnalisisSuelo.findById(_id);
        res.json(analisisSuelo);
    },
    // activar analisis de suelo
    async activarAnalisisSuelos(req, res) {
        const _id = req.params.id;
        try {
            const analisisSuelo = await AnalisisSuelo.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(analisisSuelo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // desactivar analisis de suelo
    async desactivarAnalisisSuelos(req, res) {
        const _id = req.params.id;
        try {
            const analisisSuelo = await AnalisisSuelo.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(analisisSuelo);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los analisis de suelo activos
    async getAnalisisSuelosActivos(req, res) {
        try {
            const analisisSuelo = await AnalisisSuelo.find({ estado: 1 });
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los analisis de suelo inactivos
    async getAnalisisSuelosInactivos(req, res) {
        try {
            const analisisSuelo = await AnalisisSuelo.find({ estado: 0 });
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas
    async getAnalisisSuelosFecha(req, res) {
        const fecha1 = req.params.fecha1;
        const fecha2 = req.params.fecha2;
        try {
            const analisisSuelo = await AnalisisSuelo.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
            res.json({ analisisSuelo });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default httpAnalisisSuelos