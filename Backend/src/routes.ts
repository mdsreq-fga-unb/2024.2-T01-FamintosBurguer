import { Router } from 'express';
import { HomeController } from './controller/HomeController';

const router = Router();

router.get('/', new HomeController().hello);

export default router;
