import Proveedores from "../models/proveedores.js"

const httpProveedores = {

    getProveedores: async(req, res) => {
        const proveedor = await Proveedores.find()
        res.json({gasto})
    },


    getProveedoresID: async(req, res) => {
        const _id = req.params 
        const proveedor = await Proveedores.findById(_id)
        res.jos({proveedor})
    },

    postProveedores: async(req, res) => {
        const body = req.body;
        try {
            const proveedor = await Proveedores.create(body)
            res.json({proveedor})
        } catch (error) {
          res.status(500).json({ error: "No se pudo crear el registro" });
        }
    }, 

    putProveedores: async(req, res) => {
        const _id = req.params.id;
        const body = req.body;
        try {
            const proveedor = await Proveedores.findByIdAndUpdate(_id, body, {new: true});
            res.json(proveedor);
        }
        catch (error) {
            res.status(500).json({ error: "No se pudo modificar el registro" });
        }
    },

    putProveedoresActivar: async (req, res) => {
        const _id = req.params
        try {
            const proveedores = await Proveedores.findByIdAndUpdate(_id, { estado: 1 }, { new: true })
            res.json({ proveedores }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo activar" });
        }      
    },

    putProveedoresDesactivar: async (req, res) => {
        const _id = req.params
        try {
            const proveedores = await Proveedores.findByIdAndUpdate(_id, { estado: 0 }, { new: true })
            res.json({ proveedores }) 
        } catch (error) {
            res.status(500).json({ error: "No se pudo desactivar" });
        }      
    },
    getProveedoresActivos: async (req, res)=> {
        try {
            const proveedores = await Proveedores.find({ estado: 1 });
            res.json({ proveedores });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getProveedoresInactivos: async (req, res)=> {
        try {
            const proveedores = await Proveedores.find({ estado: 0 });
            res.json({ proveedores });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

export default httpProveedores