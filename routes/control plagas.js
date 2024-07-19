import { Router } from "express";
import httpControlPlagas from "../controllers/control plagas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import controlPlagasHelper from "../helpers/control plagas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", [
    validarJWT,
    validarCampos
], httpControlPlagas.getControlPlagas);

router.get("/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(controlPlagasHelper.validarId),
    validarCampos
], httpControlPlagas.getControlPlagasID);

router.put("/activar/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(controlPlagasHelper.validarId),
    validarCampos
], httpControlPlagas.putControlPlagasActivar);

router.put("/desactivar/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(controlPlagasHelper.validarId),
    validarCampos
], httpControlPlagas.putControlPlagasDesactivar);

router.get("/activos", [
    validarJWT,
    validarCampos
], httpControlPlagas.getControlPlagasActivos);

router.get("/inactivos", [
    validarJWT,
    validarCampos
], httpControlPlagas.getControlPlagasInactivos);

router.get("/fechas/:fechaInicio/:fechaFin", [
    validarJWT,
    check("fechaInicio", "La fecha de inicio es obligatoria").not().isEmpty(),
    check("fechaFin", "La fecha de fin es obligatoria").not().isEmpty(),
    validarCampos
], httpControlPlagas.getControlPlagasFechas);

router.put("/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(controlPlagasHelper.validarId),
    check("id_cultivo").custom(controlPlagasHelper.validarIdCultivo),
    check("id_empleado").custom(controlPlagasHelper.validarIdEmpleado),
    check("fecha", "La fecha es obligatoria").isDate(),
    check("tipoCultivo", "El tipo de cultivo es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("ingredienteActivo", "El ingrediente activo es obligatorio").not().isEmpty(),
    check("dosis", "La dosis es obligatoria y debe ser un número").isNumeric(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado").custom(controlPlagasHelper.validarEstado),
    validarCampos
], httpControlPlagas.putControlPlagas);

router.post("/", [
    validarJWT,
    check("id_cultivo").custom(controlPlagasHelper.validarIdCultivo),
    check("id_empleado").custom(controlPlagasHelper.validarIdEmpleado),
    check("fecha", "La fecha es obligatoria").isDate(),
    check("tipoCultivo", "El tipo de cultivo es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("ingredienteActivo", "El ingrediente activo es obligatorio").not().isEmpty(),
    check("dosis", "La dosis es obligatoria y debe ser un número").isNumeric(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("estado").custom(controlPlagasHelper.validarEstado),
    validarCampos
], httpControlPlagas.postControlPlagas);

export default router;