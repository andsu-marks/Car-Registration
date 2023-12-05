import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import 'reflect-metadata';

const port = process.env.PORT || 9000;
const hostname = process.env.HOSTNAME || 'http://localhost';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ['http://localhost:9000']
}));



app.listen(port, () => { 
    console.log(`Server running on ${hostname}:${port}`)
});