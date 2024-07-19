import { Router } from "express";
import httpMaquinariaHerramientas from "../controllers/maquinaria&herramientas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import maquinariaHerramientasHelper from "../helpers/maquinaria&herramientas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpMaquinariaHerramientas.getMaquinariaHerramientas);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(maquinariaHerramientasHelper.validarId),
    validarCampos
], httpMaquinariaHerramientas.getMaquinariaHerramientasID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpMaquinariaHerramientas.getMaquinariaHerramientasActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpMaquinariaHerramientas.getMaquinariaHerramientasInactivos);

router.post("/",[
    validarJWT,
    check("id_proveedor", "El id del proveedor es obligatorio").not().isEmpty(),
    check("id_proveedor").custom(maquinariaHerramientasHelper.validarIdProveedor),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("fechaCompra", "La fecha de compra es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpMaquinariaHerramientas.postMaquinariaHerramientas);

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(maquinariaHerramientasHelper.validarId),
    check("id_proveedor", "El id del proveedor es obligatorio").not().isEmpty(),
    check("id_proveedor").custom(maquinariaHerramientasHelper.validarIdProveedor),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("fechaCompra", "La fecha de compra es obligatoria").not().isEmpty(),
    check("observaciones", "Las observaciones son obligatorias").not().isEmpty(),
    check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("estado", "El estado debe ser un número").isNumeric(),
    validarCampos
], httpMaquinariaHerramientas.putMaquinariaHerramientas);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(maquinariaHerramientasHelper.validarId),
    validarCampos
], httpMaquinariaHerramientas.putMaquinariaHerramientasActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(maquinariaHerramientasHelper.validarId),
    validarCampos
], httpMaquinariaHerramientas.putMaquinariaHerramientasDesactivar);

export default router;