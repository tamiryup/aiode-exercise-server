import { Router } from "express";
import { getTracks, addTrack } from '../controllers/tracksController';

const router = Router();

router.get('/all', getTracks);
router.post('/add', addTrack);

export default router;