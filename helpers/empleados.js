import Empleados from "../models/empleados";

const empleadosHelper = {
    validarId: async (id) => {
        const existeEmpleado = await Empleados.findById(id);
        if (!existeEmpleado) {
            throw new Error('El id del empleado no existe');
        }
    }
};

export default empleadosHelper;