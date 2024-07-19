import { Router } from 'express';
import httpMantenimientos from '../controllers/mantenimientos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import mantenimientosHelper from '../helpers/mantenimientos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpMantenimientos.getMantenimientos);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(mantenimientosHelper.validarId),
    validarCampos
], httpMantenimientos.getMantenimientosID);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(mantenimientosHelper.validarId),
    check('id_gastos', 'El ID de gasto es obligatorio').not().isEmpty(),
    check('id_herramienta', 'El ID de herramienta es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').isDate(),
    check('virificacionRealizada', 'La verificación realizada es obligatoria').not().isEmpty(),
    check('calibracion', 'La calibración es obligatoria').not().isEmpty(),
    check('responsable', 'El responsable es obligatorio').not().isEmpty(),
    check('observaciones', 'Las observaciones son obligatorias').not().isEmpty(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpMantenimientos.putMantenimientos);

router.post('/', [
    validarJWT,
    check('id_gastos', 'El ID de gasto es obligatorio').not().isEmpty(),
    check('id_gastos').custom(mantenimientosHelper.validarIdGasto),
    check('id_herramienta', 'El ID de herramienta es obligatorio').not().isEmpty(),
    check('id_herramienta').custom(mantenimientosHelper.validarIdHerramienta),
    check('fecha', 'La fecha es obligatoria').isDate(),
    check('virificacionRealizada', 'La verificación realizada es obligatoria').not().isEmpty(),
    check('calibracion', 'La calibración es obligatoria').not().isEmpty(),
    check('responsable', 'El responsable es obligatorio').not().isEmpty(),
    check('observaciones', 'Las observaciones son obligatorias').not().isEmpty(),
    check('estado', 'El estado debe ser un número válido').isNumeric(),
    validarCampos
], httpMantenimientos.postMantenimientos);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(mantenimientosHelper.validarId),
    validarCampos
], httpMantenimientos.putMantenimientosActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(mantenimientosHelper.validarId),
    validarCampos
], httpMantenimientos.putMantenimientosDesactivar);

router.get('/activas', [
    validarJWT,
    validarCampos
], httpMantenimientos.getMantenimientosActivas);

router.get('/inactivas', [
    validarJWT,
    validarCampos
], httpMantenimientos.getMantenimientosInactivas);

router.get('/fecha/:fecha1/:fecha2', [
    validarJWT,
    check('fecha1', 'La fecha de inicio es obligatoria').isDate(),
    check('fecha2', 'La fecha de fin es obligatoria').isDate(),
    validarCampos
], httpMantenimientos.getMantenimientosFecha);

export default router;
