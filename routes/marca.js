const { Router } = require('express');
const { getMarcas, getMarcaById, createMarca, updateMarcaById} = require('../controllers/marca');

const router = Router();


router.get('/', getMarcas);


 router.get('/:id', getMarcaById);


router.post('/', createMarca);

router.put('/:id', updateMarcaById);

module.exports = router;