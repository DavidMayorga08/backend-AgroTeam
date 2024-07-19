import { Router } from 'express';
import httpAnalisisSuelos from '../controllers/analisis suelos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import analisisSuelosHelper from '../helpers/analisis suelos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpAnalisisSuelos.getAnalisisSuelos);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(analisisSuelosHelper.validarId),
    validarCampos
], httpAnalisisSuelos.getAnalisisSuelosID);


router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpAnalisisSuelos.getAnalisisSuelosActivos);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos
], httpAnalisisSuelos.getAnalisisSuelosInactivos);

router.post('/', [
    validarJWT,
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('id_parcela', 'El id de la parcela es obligatorio').not().isEmpty(),
    check('id_parcela').custom(analisisSuelosHelper.validarIdParcela),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(analisisSuelosHelper.validarIdEmpleado),
    check('muestra', 'La muestra es obligatoria').not().isEmpty(),
    check('cultivo', 'El cultivo es obligatorio').not().isEmpty(),
    check('laboratorio', 'El laboratorio es obligatorio').not().isEmpty(),
    check('resultado', 'El resultado es obligatorio').not().isEmpty(),
    check('recomendacion', 'La recomendación es obligatoria').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpAnalisisSuelos.postAnalisisSuelos);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(analisisSuelosHelper.validarId),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('id_parcela', 'El id de la parcela es obligatorio').not().isEmpty(),
    check('id_parcela').custom(analisisSuelosHelper.validarIdParcela),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(analisisSuelosHelper.validarIdEmpleado),
    check('muestra', 'La muestra es obligatoria').not().isEmpty(),
    check('cultivo', 'El cultivo es obligatorio').not().isEmpty(),
    check('laboratorio', 'El laboratorio es obligatorio').not().isEmpty(),
    check('resultado', 'El resultado es obligatorio').not().isEmpty(),
    check('recomendacion', 'La recomendación es obligatoria').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpAnalisisSuelos.putAnalisisSuelos);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(analisisSuelosHelper.validarId),
    validarCampos
], httpAnalisisSuelos.activarAnalisisSuelos);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(analisisSuelosHelper.validarId),
    validarCampos
], httpAnalisisSuelos.desactivarAnalisisSuelos);

export default router;