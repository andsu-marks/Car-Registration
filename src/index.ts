import express, { NextFunction, Request, Response }  from 'express';
import 'dotenv/config';
import cors from 'cors';
import 'reflect-metadata';
import AppError from './error/appError';
import { Router } from 'express';
import brandRouter from './modules/BrandEntity/router/brand.routes';
import modelRouter from './modules/ModelEntity/router/model.routes';
import versionRouter from './modules/VersionEntity/router/Version.routes';


const port = process.env.PORT || 9000;
const hostname = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: ['http://localhost:9000']
}));

const routes = Router();
routes.use('/brand', brandRouter);
routes.use('/model', modelRouter);
routes.use('/version', versionRouter);
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log('aqui!');  
  if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error ${error}`
    })
  });

app.listen(port, () => { 
console.log(`Server running on ${hostname}:${port}`)
});