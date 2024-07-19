import Riegos from '../models/riegos.js';

const httpRiegos = {
    // crear un riego
    async postRiegos(req, res) {
        const body = req.body;
        try {
            const riego = await Riegos.create(body);
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un riego
    async putRiegos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const riego = await Riegos.findByIdAndUpdate(_id, body, {new: true});
            res.json(riego);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los riegos
    async getRiegos(req, res) {
        try {
            const riego = await Riegos.find();
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un riego por id
    async getRiegosID(req, res) {
        const _id = req.params.id;
        const riego = await Riegos.findById(_id);
        res.json(riego);
    },
    // activar riego
    async activarRiegos(req, res) {
        const _id = req.params.id;
        try {
            const riego = await Riegos.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(riego);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // desactivar riego
    async desactivarRiegos(req, res) {
        const _id = req.params.id;
        try {
            const riego = await Riegos.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(riego);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar riegos activos
    async getRiegosActivos(req, res) {
        try {
            const riego = await Riegos.find({ estado: 1 });
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar riegos inactivos
    async getRiegosInactivos(req, res) {
        try {
            const riego = await Riegos.find({ estado: 0 });
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar entre fechas 
    async getRiegosFecha(req, res) {
        const fecha1 = req.params.fecha1;
        const fecha2 = req.params.fecha2;
        try {
            const riego = await Riegos.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
            res.json({ riego });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default httpRiegos