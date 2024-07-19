import { Router } from 'express';
import httpClimas from '../controllers/climas.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import climasHelper from '../helpers/climas.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpClimas.getClimas);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(climasHelper.validarId),
    validarCampos
], httpClimas.getClimasID);

router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpClimas.getClimasActivos);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos
], httpClimas.getClimasInactivos);

router.post('/', [
    validarJWT,
    check('id_finca', 'El id de la finca es obligatorio').not().isEmpty(),
    check('id_finca').custom(climasHelper.validarIdFinca),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(climasHelper.validarIdEmpleado),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('tipoClima', 'El tipo de clima es obligatorio').not().isEmpty(),
    check('horaInicio', 'La hora de inicio es obligatoria').not().isEmpty(),
    check('horaFin', 'La hora de fin es obligatoria').not().isEmpty(),
    check('temperaturaMax', 'La temperatura máxima es obligatoria').not().isEmpty(),
    check('temperaturaMin', 'La temperatura mínima es obligatoria').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpClimas.postClimas);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(climasHelper.validarId),
    check('id_finca', 'El id de la finca es obligatorio').not().isEmpty(),
    check('id_finca').custom(climasHelper.validarIdFinca),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(climasHelper.validarIdEmpleado),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('tipoClima', 'El tipo de clima es obligatorio').not().isEmpty(),
    check('horaInicio', 'La hora de inicio es obligatoria').not().isEmpty(),
    check('horaFin', 'La hora de fin es obligatoria').not().isEmpty(),
    check('temperaturaMax', 'La temperatura máxima es obligatoria').not().isEmpty(),
    check('temperaturaMin', 'La temperatura mínima es obligatoria').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpClimas.putClimas);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpClimas.putClimasActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpClimas.putClimasDesactivar);

export default router;