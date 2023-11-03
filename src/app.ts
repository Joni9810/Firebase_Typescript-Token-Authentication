import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './routes/User.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/users', UserRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('VIVEEEEEEEE!');
})

export default app;