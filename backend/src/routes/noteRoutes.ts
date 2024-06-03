import express from 'express';
import {
	createNote,
	deleteNote,
	getNote,
	getNotes,
	updateNote,
} from '../controller/noteControllers';

const router = express.Router();

router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
