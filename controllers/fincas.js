 import Fincas from '../models/fincas.js';

const httpFincas = {
    // crear una finca
    async postFincas(req, res) {
        const body = req.body;
        try {
            const finca = await Fincas.create(body);
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una finca
    async putFincas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const finca = await Fincas.findByIdAndUpdate(_id, body, {new: true});
            res.json(finca);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las fincas
    async getFincas(req, res) {
        try {
            const finca = await Fincas.find();
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una finca por id
    async getFincasID(req, res) {
        const _id = req.params.id;
        const finca = await Fincas.findById(_id);
        res.json(finca);
    },
    // activar finca
    async activarFincas(req, res) {
        const _id = req.params.id;
        try {
            const finca = await Fincas.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(finca);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // desactivar finca
    async desactivarFincas(req, res) {
        const _id = req.params.id;
        try {
            const finca = await Fincas.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(finca);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
    }
    },
    // listar fincas activas
    async getFincasActivas(req, res) {
        try {
            const finca = await Fincas.find({ estado: 1 });
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar fincas inactivas
    async getFincasInactivas(req, res) {
        try {
            const finca = await Fincas.find({ estado: 0 });
            res.json({ finca });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
};
export default httpFincas