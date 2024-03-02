import express from 'express';
import { Request, Response } from 'express';
const app = express();


app.get('/', (req:Request , res: Response) => {
  res.send('Hello World');
});
app.get('/info', (req:Request , res: Response) => {
  res.send('App built by Veer');
});

app.listen(8888, () => {
  console.log('Server is running on port 8888');
});
