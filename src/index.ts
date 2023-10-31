import express, { Express, Request, Response , Application } from 'express';
import { routerApi } from './routes/index';
import { errorHandler,logErrors } from './middlewares/errorHandler';

// import dotenv from 'dotenv';
//For env File 
// dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// app.get('/', (req:any, res:any) => {
//   res.send('Welcome to Express & TypeScript Server');
// });
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

routerApi(app)

app.use(logErrors)
app.use(errorHandler)