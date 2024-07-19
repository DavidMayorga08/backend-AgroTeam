import { Router } from "express";
import httpFacturas from "../controllers/facturas.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import facturasHelper from "../helpers/facturas.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.get("/", [
    validarJWT,
    validarCampos
], httpFacturas.getFacturas);

router.get("/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(facturasHelper.validarId),
    validarCampos
], httpFacturas.getFacturasID);

router.put("/activar/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(facturasHelper.validarId),
    validarCampos
], httpFacturas.putFacturaActivar);

router.put("/desactivar/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(facturasHelper.validarId),
    validarCampos
], httpFacturas.putFacturaDesactivar);

router.get("/activos", [
    validarJWT,
    validarCampos
], httpFacturas.getFacturaActivos);

router.get("/inactivos", [
    validarJWT,
    validarCampos
], httpFacturas.getFacturaInactivos);

router.get("/fechas/:fecha1/:fecha2", [
    validarJWT,
    check("fecha1", "La fecha de inicio es obligatoria").not().isEmpty(),
    check("fecha2", "La fecha de fin es obligatoria").not().isEmpty(),
    validarCampos
], httpFacturas.getFacturasFechas);

router.put("/:id", [
    validarJWT,
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(facturasHelper.validarId),
    check("detalle.*.id_inventario").custom(facturasHelper.validarIdInventario),
    check("id_comprador").custom(facturasHelper.validarIdComprador),
    check("fecha", "La fecha es obligatoria").isDate(),
    check("valor", "El valor es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.cantidad", "La cantidad es obligatoria y debe ser un número").isNumeric(),
    check("detalle.*.nombreProducto", "El nombre del producto es obligatorio").not().isEmpty(),
    check("detalle.*.subTotal", "El subTotal es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.iva", "El IVA es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.total", "El total es obligatorio y debe ser un número").isNumeric(),
    check("estado").custom(facturasHelper.validarEstado),
    validarCampos
], httpFacturas.putFacturas);

router.post("/", [
    validarJWT,
    check("detalle.*.id_inventario").custom(facturasHelper.validarIdInventario),
    check("id_comprador").custom(facturasHelper.validarIdComprador),
    check("fecha", "La fecha es obligatoria").isDate(),
    check("valor", "El valor es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.cantidad", "La cantidad es obligatoria y debe ser un número").isNumeric(),
    check("detalle.*.nombreProducto", "El nombre del producto es obligatorio").not().isEmpty(),
    check("detalle.*.subTotal", "El subTotal es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.iva", "El IVA es obligatorio y debe ser un número").isNumeric(),
    check("detalle.*.total", "El total es obligatorio y debe ser un número").isNumeric(),
    check("estado").custom(facturasHelper.validarEstado),
    validarCampos
], httpFacturas.postFacturas);

export default router;
