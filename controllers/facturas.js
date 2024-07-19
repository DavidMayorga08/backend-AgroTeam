import Factura from '../models/facturas.js';

const httpFacturas = {
    // crear una factura
    async postFacturas(req, res) {
        const body = req.body;
        try {
            const factura = await Factura.create(body);
            res.json({ factura });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una factura
    async putFacturas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const factura = await Factura.findByIdAndUpdate(_id, body, {new: true});
            res.json(factura);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las facturas
    async getFacturas(req, res) {
        try {
            const factura = await Factura.find();
            res.json({ factura });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una factura por id
    async getFacturasID(req, res) {
        const _id = req.params.id;
        const factura = await Factura.findById(_id);
        res.json(factura);
    },
    putFacturaActivar: async (req, res) => {
        const _id = req.params
        try {
            const factura = await Factura.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ factura }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putFacturaDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const factura = await Factura.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ factura }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

        // listar Factura activos
        async getFacturaActivos(req, res) {
            try {
                const factura = await Factura.find({ estado: 1 });
                res.json({ factura });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        // listar Factura inactivos
        async getFacturaInactivos(req, res) {
            try {
                const factura = await Factura.find({ estado: 0 });
                res.json({ factura });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
        // listar entre fechas 
        async getFacturasFechas(req, res) {
            const fecha1 = req.params.fecha1;
            const fecha2 = req.params.fecha2;
            try {
                const factura = await Factura.find({ fecha: { $gte: fecha1, $lte: fecha2 } });
                res.json({ factura });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
};

export default httpFacturas