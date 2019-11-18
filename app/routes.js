import express from 'express';

import BlockchainController from './controllers/BlockchainController';

const router = express.Router();

router.get('/', BlockchainController.stats);

export default router;
