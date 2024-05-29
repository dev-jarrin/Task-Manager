import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import connectDB from './utils/database';
import taskRoutes from './routes/taskRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/tasks', taskRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;