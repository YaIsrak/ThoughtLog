import { Request, Response } from 'express';
import Todo from '../models/Todo';

export const createTodo = async (req: Request, res: Response) => {
	const { title } = req.body;

	if (!title) {
		return res.status(400).json({ error: 'Title are required' });
	}

	try {
		const newTodo = new Todo({
			title,
		});
		await newTodo.save();
		res.status(201).json(newTodo);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const getTodos = async (req: Request, res: Response) => {
	try {
		const todos = await Todo.find();
		res.status(201).json({
			count: todos.length,
			data: todos,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const getTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const todo = await Todo.findById(id);
		if (!todo) {
			return res.status(404).json({ error: 'todo not found' });
		}
		res.status(201).json(todo);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const updateTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title } = req.body;

	if (!title) {
		return res.status(400).json({ error: 'Title are required' });
	}

	try {
		const todo = await Todo.findByIdAndUpdate(id, { title });
		if (!todo) {
			return res.status(404).json({ error: 'todo not found' });
		}
		res.status(201).json({
			message: 'todo updated successfully',
			data: todo,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteTodo = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const todo = await Todo.findByIdAndDelete(id);
		if (!todo) {
			return res.status(404).json({ error: 'todo not found' });
		}
		res.status(201).json({
			message: 'todo deleted successfully',
			data: todo,
		});
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
};
