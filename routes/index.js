/* eslint-disable import/no-named-as-default */
import express from 'express';
// eslint-disable-next-line import/extensions
import AppController from '../controllers/AppController.js';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStatus);

export default router;
