import MaquinariaHerramientas from "../models/maquinaria&herramientas.js"

const httpMaquinariaHerramientas = {

    getMaquinariaHerramientas: async(req, res) => {
        const maquinaria_herramientas = await MaquinariaHerramientas.find()
        res.json({maquinaria_herramientas})
    },


    getMaquinariaHerramientasID: async(req, res) => {
        const _id = req.params 
        const maquinaria_herramientas = await MaquinariaHerramientas.findById(_id)
        res.jos({maquinaria_herramientas})
    },

    postMaquinariaHerramientas: async(req, res) => {
        const body = req.body;
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.create(body)
            res.json({maquinaria_herramientas})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putMaquinariaHerramientas: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.findByIdAndUpdate(_id, body, {new: true});
            res.json(maquinaria_herramientas);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },
    putMaquinariaHerramientasActivar: async (req, res) => {
        const _id = req.params
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ maquinaria_herramientas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putMaquinariaHerramientasDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ maquinaria_herramientas }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },

    getMaquinariaHerramientasActivos: async (req, res)=> {
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.find({ estado: 1 });
            res.json({ maquinaria_herramientas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getMaquinariaHerramientasInactivos: async (req, res)=> {
        try {
            const maquinaria_herramientas = await MaquinariaHerramientas.find({ estado: 0 });
            res.json({ maquinaria_herramientas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

export default httpMaquinariaHerramientas