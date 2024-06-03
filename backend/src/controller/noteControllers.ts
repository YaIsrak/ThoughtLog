import { Request, Response } from 'express';
import Note from '../models/Note';

export const createNote = async (req: Request, res: Response) => {
	const { title, content } = req.body;

	if (!title || !content) {
		return res.status(400).json({ error: 'Title and Content are required' });
	}

	try {
		const newNote = new Note({
			title,
			content,
		});
		await newNote.save();
		res.status(201).json(newNote);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const getNotes = async (req: Request, res: Response) => {
	try {
		const notes = await Note.find();
		res.status(201).json({
			count: notes.length,
			data: notes,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const getNote = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const note = await Note.findById(id);
		if (!note) {
			return res.status(404).json({ error: 'Note not found' });
		}
		res.status(201).json(note);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const updateNote = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, content } = req.body;

	if (!title || !content) {
		return res.status(400).json({ error: 'Title and Content are required' });
	}

	try {
		const note = await Note.findByIdAndUpdate(id, { title, content });
		if (!note) {
			return res.status(404).json({ error: 'Note not found' });
		}
		res.status(201).json({
			message: 'Note updated successfully',
			data: note,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteNote = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const note = await Note.findByIdAndDelete(id);
		if (!note) {
			return res.status(404).json({ error: 'Note not found' });
		}
		res.status(201).json({
			message: 'Note deleted successfully',
			data: note,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};
