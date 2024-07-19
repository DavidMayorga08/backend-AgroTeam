import { Router } from "express";
import httpCultivos from "../controllers/cultivos.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import cultivosHelper from "../helpers/cultivos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/",[
    validarJWT,
    validarCampos
], httpCultivos.getCultivos);

router.get("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(cultivosHelper.validarId),
    validarCampos
], httpCultivos.getCultivosID);

router.get("/listar/activos",[
    validarJWT,
    validarCampos
], httpCultivos.getCultivosActivos);

router.get("/listar/inactivos",[
    validarJWT,
    validarCampos
], httpCultivos.getCultivosInactivos);

router.post("/",[
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("id_parcela", "El id de la parcela es obligatorio").not().isEmpty(),
    check("id_parcela").custom(cultivosHelper.validarIdParcela),
    check("estado", "El estado debe ser un número").isNumeric(),
])

router.put("/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(cultivosHelper.validarId),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("tipo", "El tipo es obligatorio").not().isEmpty(),
    check("id_parcela", "El id de la parcela es obligatorio").not().isEmpty(),
    check("id_parcela").custom(cultivosHelper.validarIdParcela),
    check("estado", "El estado debe ser un número").isNumeric(),
], httpCultivos.putCultivos);

router.put("/activar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(cultivosHelper.validarId),
    validarCampos
], httpCultivos.putCultivosActivar);

router.put("/desactivar/:id",[
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(cultivosHelper.validarId),
    validarCampos
], httpCultivos.putCultivosDesactivar);

export default router;