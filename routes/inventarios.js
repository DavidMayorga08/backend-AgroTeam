import { Router } from "express";
import httpInventarios from "../controllers/inventarios.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import inventariosHelper from "../helpers/inventarios.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpInventarios.getinventarios);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(inventariosHelper.validarId),
    validarCampos
], httpInventarios.getinventariosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpInventarios.getInventariosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpInventarios.getInventariosInactivos);

router.post("/",[
    validarJWT,
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("unidad", "La unidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("id_semilla", "El id de la semilla es obligatorio").not().isEmpty(),
    check("id_semilla").custom(inventariosHelper.validarIdSemillas),
    check("id_insumo", "El id del insumo es obligatorio").not().isEmpty(),
    check("id_insumo").custom(inventariosHelper.validarIdInsumos),
    check("id_maquina", "El id de la maquina es obligatorio").not().isEmpty(),
    check("id_maquina").custom(inventariosHelper.validarIdMaquina),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpInventarios.postinventarios);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(inventariosHelper.validarId),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("unidad", "La unidad es obligatoria").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("id_semilla", "El id de la semilla es obligatorio").not().isEmpty(),
    check("id_semilla").custom(inventariosHelper.validarIdSemillas),
    check("id_insumo", "El id del insumo es obligatorio").not().isEmpty(),
    check("id_insumo").custom(inventariosHelper.validarIdInsumos),
    check("id_maquina", "El id de la maquina es obligatorio").not().isEmpty(),
    check("id_maquina").custom(inventariosHelper.validarIdMaquina),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpInventarios.putinventarios);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(inventariosHelper.validarId),
    validarCampos
], httpInventarios.putInventariosActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(inventariosHelper.validarId),
    validarCampos
], httpInventarios.putInventariosDesactivar);