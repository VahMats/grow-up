import express, {Request, Response} from 'express';
import {PORT} from './constants';

import userRout from './routes/users';

const app = express();

app.use(express.json());

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.use('/api/v1/users', userRout);

app.listen(PORT, () => {
  console.log(`Application started on port ${ PORT }!`);
});
