import Mantenimientos from '../models/mantenimientos.js';

const httpMantenimientos = {
    // crear un mantenimiento
    async postMantenimientos(req, res) {
        const body = req.body;
        try {
            const mantenimiento = await Mantenimientos.create(body);
            res.json({ mantenimiento });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un mantenimiento
    async putMantenimientos(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const mantenimiento = await Mantenimientos.findByIdAndUpdate(_id, body, {new: true});
            res.json(mantenimiento);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los mantenimientos
    async getMantenimientos(req, res) {
        try {
            const mantenimiento = await Mantenimientos.find();
            res.json({ mantenimiento });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un mantenimiento por id
    async getMantenimientosID(req, res) {
        const _id = req.params.id;
        const mantenimiento = await Mantenimientos.findById(_id);
        res.json(mantenimiento);
    },

    putMantenimientosActivar: async (req, res) => {
        const _id = req.params
        try {
            const mantenimiento = await Mantenimientos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ mantenimiento }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putMantenimientosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const mantenimiento = await Mantenimientos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ mantenimiento }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

        // listar Mantenimientos activas
        async getMantenimientosActivas(req, res) {
            try {
                const mantenimientos = await Mantenimientos.find({ estado: 1 });
                res.json({ mantenimientos });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        // listar Mantenimientos inactivas
        async getMantenimientosInactivas(req, res) {
            try {
                const mantenimientos = await Mantenimientos.find({ estado: 0 });
                res.json({ mantenimientos });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        // listar entre fechas
        async getMantenimientosFecha(req, res) {
            const fecha1 = req.params.fecha1;
            const fecha2 = req.params.fecha2;
            try {
                const mantenimientos = await Mantenimientos.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
                res.json({ mantenimientos });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
};

export default httpMantenimientos