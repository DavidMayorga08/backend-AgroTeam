import { Router } from 'express';
import httpElaboracionSustratos from '../controllers/elaboracion sustratos.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import elaboracionSustratosHelper from '../helpers/elaboracion sustratos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpElaboracionSustratos.getElaboracionSustratos);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelper.validarId),
    validarCampos
], httpElaboracionSustratos.getElaboracionSustratosID);

router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpElaboracionSustratos.getElaboracionSustratosActivos);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos
], httpElaboracionSustratos.getElaboracionSustratosInactivos);

router.post('/', [
    validarJWT,
    check('id_proceso', 'El id del proceso es obligatorio').not().isEmpty(),
    check('id_proceso').custom(elaboracionSustratosHelper.validarIdProceso),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('productoComercial', 'El producto comercial es obligatorio').not().isEmpty(),
    check('ingredienteActivo', 'El ingrediente activo es obligatorio').not().isEmpty(),
    check('dosisUtilizada', 'La dosis utilizada es obligatoria').not().isEmpty(),
    check('metodoAplicacion', 'El método de aplicación es obligatorio').not().isEmpty(),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(elaboracionSustratosHelper.validarIdEmpleado),
    check('observaciones', 'Las observaciones son obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpElaboracionSustratos.postElaboracionSustratos);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelper.validarId),
    check('id_proceso', 'El id del proceso es obligatorio').not().isEmpty(),
    check('id_proceso').custom(elaboracionSustratosHelper.validarIdProceso),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('productoComercial', 'El producto comercial es obligatorio').not().isEmpty(),
    check('ingredienteActivo', 'El ingrediente activo es obligatorio').not().isEmpty(),
    check('dosisUtilizada', 'La dosis utilizada es obligatoria').not().isEmpty(),
    check('metodoAplicacion', 'El método de aplicación es obligatorio').not().isEmpty(),
    check('id_empleado', 'El id del empleado es obligatorio').not().isEmpty(),
    check('id_empleado').custom(elaboracionSustratosHelper.validarIdEmpleado),
    check('observaciones', 'Las observaciones son obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpElaboracionSustratos.putElaboracionSustratos);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelper.validarId),
    validarCampos
], httpElaboracionSustratos.putElaboracionSustratosActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(elaboracionSustratosHelper.validarId),
    validarCampos
], httpElaboracionSustratos.putElaboracionSustratosDesactivar);

export default router;