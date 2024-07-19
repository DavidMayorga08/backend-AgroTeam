import { Router } from 'express';
import httpFertilizaciones from '../controllers/fertilizaciones.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import fertilizacionesHelper from '../helpers/fertilizaciones.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpFertilizaciones.getFertilizaciones);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fertilizacionesHelper.validarId),
    validarCampos
], httpFertilizaciones.getFertilizacionesID);

router.post('/', [
    validarJWT,
    check('id_cultivo', 'El id_cultivo es obligatorio').not().isEmpty(),
    check('id_cultivo').custom(fertilizacionesHelper.validarIdCultivo),
    check('id_empleado', 'El id_empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(fertilizacionesHelper.validarIdEmpleado),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('estadoFenologico', 'El estado fenológico es obligatorio').not().isEmpty(),
    check('tipo', 'El tipo es obligatorio').not().isEmpty(),
    check('nombreFertilizante', 'El nombre del fertilizante es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty().isNumeric(),
    check('id_inventario', 'El id_inventario es obligatorio').not().isEmpty(),
    check('id_inventario').custom(fertilizacionesHelper.validarIdInventario),
    check('estado', 'El estado es obligatorio').not().isEmpty().isNumeric(),
    validarCampos
], httpFertilizaciones.postFertilizaciones);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fertilizacionesHelper.validarId),
    check('id_cultivo', 'El id_cultivo es obligatorio').not().isEmpty(),
    check('id_cultivo').custom(fertilizacionesHelper.validarIdCultivo),
    check('id_empleado', 'El id_empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(fertilizacionesHelper.validarIdEmpleado),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('estadoFenologico', 'El estado fenológico es obligatorio').not().isEmpty(),
    check('tipo', 'El tipo es obligatorio').not().isEmpty(),
    check('nombreFertilizante', 'El nombre del fertilizante es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty().isNumeric(),
    check('id_inventario', 'El id_inventario es obligatorio').not().isEmpty(),
    check('id_inventario').custom(fertilizacionesHelper.validarIdInventario),
    check('estado', 'El estado es obligatorio').not().isEmpty().isNumeric(),
    validarCampos
], httpFertilizaciones.putFertilizaciones);


router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fertilizacionesHelper.validarId),
    validarCampos
], httpFertilizaciones.putFertilizacionesActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(fertilizacionesHelper.validarId),
    validarCampos
], httpFertilizaciones.putFertilizacionesDesactivar);


router.get('/activos', [
    validarJWT,
    validarCampos
], httpFertilizaciones.getFertilizacionesActivos);

router.get('/inactivos', [
    validarJWT,
    validarCampos
], httpFertilizaciones.getFertilizacionesInactivos);


router.get('/fechas/:fecha1/:fecha2', [
    validarJWT,
    check('fecha1', 'Fecha 1 no válida').isISO8601().toDate(),
    check('fecha2', 'Fecha 2 no válida').isISO8601().toDate(),
    validarCampos
], httpFertilizaciones.getFertilizacionesEntreFechas);

export default router;
