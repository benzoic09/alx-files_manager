/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import AppController from '../controllers/AppController.js';
import UsersController from '../controllers/UsersController.js';

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStatus);
router.post('/users', UsersController.postNew);

export default router;
