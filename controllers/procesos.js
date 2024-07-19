import Procesos from "../models/procesos.js"

const httpProcesos = {

    getGastos: async(req, res) => {
        const proceso = await Procesos.find()
        res.json({proceso})
    },


    getProcesosID: async(req, res) => {
        const _id = req.params 
        const proceso = await Procesos.findById(_id)
        res.jos({proceso})
    },

    postProcesos: async(req, res) => {
        const body = req.body;
        try {
            const proceso = await Procesos.create(body)
            res.json({proceso})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putProcesos: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const proceso = await Procesos.findByIdAndUpdate(_id, body, {new: true});
            res.json(proceso);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },
    putProcesosActivar: async (req, res) => {
        const _id = req.params
        try {
            const proceso = await Procesos.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ proceso }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putProcesosDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const proceso = await Procesos.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ proceso }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    
    getProcesosActivos: async (req, res)=> {
        try {
            const proceso = await Procesos.find({ estado: 1 });
            res.json({ proceso });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getProcesosInactivos: async (req, res)=> {
        try {
            const proceso = await Procesos.find({ estado: 0 });
            res.json({ proceso });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

}

export default httpProcesos