import { Router } from "express";
import httpEmpleados from "../controllers/empleados.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import empleadosHelper from "../helpers/empleados.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpEmpleados.getEmpleados);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(empleadosHelper.validarId),
    validarCampos
], httpEmpleados.getEmpleadosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpEmpleados.getEmpleadosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpEmpleados.getEmpleadosInactivos);

router.post("/", [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("estudios", "Los estudios son obligatorios").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpEmpleados.postEmpleados);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(empleadosHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("direccion", "La dirección es obligatoria").not().isEmpty(),
    check("telefono", "El teléfono es obligatorio").not().isEmpty(),
    check("estudios", "Los estudios son obligatorios").not().isEmpty(),
    check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpEmpleados.putEmpleados);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(empleadosHelper.validarId),
    validarCampos
], httpEmpleados.activarEmpleados);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(empleadosHelper.validarId),
    validarCampos
], httpEmpleados.desactivarEmpleados);

export default router;