import express from 'express';
import {Request, Response} from 'express';

import userRout from './routes/users'
 
const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.use('/users', userRout)

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});