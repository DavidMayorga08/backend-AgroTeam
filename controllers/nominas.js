import Nominas from '../models/nominas.js';

const httpNominas = {
    // crear una nomina
    async postNominas(req, res) {
        const body = req.body;
        try {
            const nomina = await Nominas.create(body);
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar una nomina
    async putNominas(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, body, {new: true});
            res.json(nomina);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos las nominas
    async getNominas(req, res) {
        try {
            const nomina = await Nominas.find();
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar una nomina por id
    async getNominasID(req, res) {
        const _id = req.params.id;
        const nomina = await Nominas.findById(_id);
        res.json(nomina);
    },

    putNominasActivar: async (req, res) => {
        const _id = req.params
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ nomina }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putNominasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const nomina = await Nominas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ nomina }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getNominasActivos: async (req, res)=> {
        try {
            const nomina = await Nominas.find({ estado: 1 });
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getNominasInactivos: async (req, res)=> {
        try {
            const nomina = await Nominas.find({ estado: 0 });
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
        // Listar nóminas entre fechas
        async getNominasEntreFechas(req, res) {
            const { fechaInicio, fechaFin } = req.query;
            try {
                const nominas = await Nominas.find({
                    fecha: {
                        $gte: new Date(fechaInicio),
                        $lte: new Date(fechaFin)
                    }
                });
                res.json({ nominas });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
            // Obtener la nomina de un empleado por ID de empleado
    async getNominaPorEmpleado(req, res) {
        const idEmpleado = req.params.id;
        try {
            // Buscar la nómina del empleado por su ID
            const nomina = await Nominas.findOne({ id_empleado: idEmpleado });
            if (!nomina) {
                return res.status(404).json({ error: 'No se encontró la nomina para este empleado' });
            }
            res.json({ nomina });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
        // Listar el total de todas las nominas
        async getTotalNominas(req, res) {
            try {
                const totalNominas = await Nominas.aggregate([
                    { $group: { _id: null, total: { $sum: "$valor" } } }
                ]);
                res.json({ totalNominas: totalNominas[0].total });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },
};

export default httpNominas