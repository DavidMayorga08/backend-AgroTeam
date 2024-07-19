import { Router } from 'express';
import httpCompradores from '../controllers/compradores.js';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import compradoresHelper from '../helpers/compradores.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], httpCompradores.getCompradores);

router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(compradoresHelper.validarId),
    validarCampos
], httpCompradores.getCompradoresID);

router.get('/listar/activos', [
    validarJWT,
    validarCampos
], httpCompradores.getCompradoresActivos);

router.get('/listar/inactivos', [
    validarJWT,
    validarCampos
], httpCompradores.getCompradoresInactivos);

router.post('/', [
    validarJWT,
    check('id_produccion', 'El id de la producción es obligatorio').not().isEmpty(),
    check('id_produccion').custom(compradoresHelper.validarIdProduccion),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('especie', 'La especie es obligatoria').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('NroGuiaTransporte', 'El número de guía de transporte es obligatorio').not().isEmpty(),
    check('NroLoteComecial', 'El número de lote comercial es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpCompradores.postCompradores);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(compradoresHelper.validarId),
    check('id_produccion', 'El id de la producción es obligatorio').not().isEmpty(),
    check('id_produccion').custom(compradoresHelper.validarIdProduccion),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('especie', 'La especie es obligatoria').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('NroGuiaTransporte', 'El número de guía de transporte es obligatorio').not().isEmpty(),
    check('NroLoteComecial', 'El número de lote comercial es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpCompradores.putCompradores);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(compradoresHelper.validarId),
    validarCampos
], httpCompradores.putCompradoresActivar);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(compradoresHelper.validarId),
    validarCampos
], httpCompradores.putCompradoresDesactivar);

export default router;