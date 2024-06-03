import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import noteRoute from './routes/noteRoutes';
import todoRoute from './routes/todoRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api/notes', noteRoute);
app.use('/api/todos', todoRoute);

// app run
mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => {
		console.log('🟢 MongoDB connected');

		app.listen(process.env.PORT, () => {
			console.log('🟢 Server listening on port 3000');
		});
	})
	.catch(() => {
		console.log('❌ There is an error');
	});
