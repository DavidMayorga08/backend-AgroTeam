import Empleados from '../models/empleados.js';

const httpEmpleados = {
    // crear un empleado
    async postEmpleados(req, res) {
        const body = req.body;
        try {
            const empleado = await Empleados.create(body);
            res.json({ empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // modificar un empleado
    async putEmpleados(req, res) {
        const _id = req.params.id;
        const body = req.body;
        try {
            const empleado = await Empleados.findByIdAndUpdate(_id, body, {new: true});
            res.json(empleado);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar todos los empleados
    async getEmpleados(req, res) {
        try {
            const empleado = await Empleados.find();
            res.json({ empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar un empleado por id
    async getEmpleadosID(req, res) {
        const _id = req.params.id;
        const empleado = await Empleados.findById(_id);
        res.json(empleado);
    },
    // activar empleado
    async activarEmpleados(req, res) {
        const _id = req.params.id;
        try {
            const empleado = await Empleados.findByIdAndUpdate(_id, { estado: 1 }, { new: true });
            res.json(empleado);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // desactivar empleado
    async desactivarEmpleados(req, res) {
        const _id = req.params.id;
        try {
            const empleado = await Empleados.findByIdAndUpdate(_id, { estado: 0 }, { new: true });
            res.json(empleado);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar empleados activos
    async getEmpleadosActivos(req, res) {
        try {
            const empleado = await Empleados.find({ estado: 1 });
            res.json({ empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // listar empleados inactivos
    async getEmpleadosInactivos(req, res) {
        try {
            const empleado = await Empleados.find({ estado: 0 });
            res.json({ empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default httpEmpleados