import express from 'express';

// controller
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/login', userController.login);
router.get('/logout', userController.logout);

export default router;

