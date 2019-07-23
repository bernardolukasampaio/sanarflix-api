const express = require('express');

const router = express.Router();

const controller = require('../controllers/sanarflix-controller');

router.get('/sanarflix/criarCliente/:nome', controller.criarClienteMundipagg);

router.get('/sanarflix/obter/:id', controller.obterClienteMundipagg);

router.get('/sanarflix/listarClientes', controller.listarClientesMundipagg);

router.get('/sanarflix/criarCartaoCliente/:id/nome/:nome', controller.criarCartaoclienteMundipagg);

router.get('/sanarflix/obterCartaoCliente/:id', controller.obterCartaoclienteMundipagg);

router.get('/sanarflix/criarPlanoMundipagg/plano/:nome/intervalo/:intervalo/preco/:preco', controller.criarPlanoMundipagg);

router.get('/sanarflix/criarAssinaturaMundipagg/plano/:idPlano/cliente/:idCliente', controller.criarAssinaturaMundipagg);


module.exports = router;