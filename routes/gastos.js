import { Router } from 'express';
import httpGastos from '../controllers/gastos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import gastosHelper from '../helpers/gastos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpGastos.getGastos);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.getGastosID);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.putGastosActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    validarCampos
], httpGastos.putGastosDesactivar);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(gastosHelper.validarId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('NroFactura', 'El número de factura es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('total', 'El total debe ser un número válido').isNumeric(),
    check('id_insumo', 'El ID de insumo es obligatorio').not().isEmpty(),
    check('id_insumo').custom(gastosHelper.validarIdInsumo),
    check('id_semillas', 'El ID de semillas es obligatorio').not().isEmpty(),
    check('id_semillas').custom(gastosHelper.validarIdSemilla),
    check('id_mantenimiento', 'El ID de mantenimiento es obligatorio').not().isEmpty(),
    check('id_mantenimiento').custom(gastosHelper.validarIdMantenimiento),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpGastos.putGastos);

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('NroFactura', 'El número de factura es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    check('total', 'El total debe ser un número válido').isNumeric(),
    check('id_insumo', 'El ID de insumo es obligatorio').not().isEmpty(),
    check('id_insumo').custom(gastosHelper.validarIdInsumo),
    check('id_semillas', 'El ID de semillas es obligatorio').not().isEmpty(),
    check('id_semillas').custom(gastosHelper.validarIdSemilla),
    check('id_mantenimiento', 'El ID de mantenimiento es obligatorio').not().isEmpty(),
    check('id_mantenimiento').custom(gastosHelper.validarIdMantenimiento),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpGastos.postGastos);

router.get('/activos', [
    validarJWT,
    validarCampos
], httpGastos.getGastosActivos);

router.get('/inactivos', [
    validarJWT,
    validarCampos
], httpGastos.getGastosInactivos);

router.get('/fechas/:fecha1/:fecha2', [
    validarJWT,
    check('fecha1', 'La primera fecha es obligatoria').not().isEmpty(),
    check('fecha2', 'La segunda fecha es obligatoria').not().isEmpty(),
    validarCampos
], httpGastos.getGastosFecha);

router.get('/total', [
    validarJWT,
    validarCampos
], httpGastos.getGastosTotal);

export default router;
