import path from 'path';
import express, { Express } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import * as Database from './postgers'


const app: Express = express();
app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
const root: string = path.join(process.cwd(), 'dist');

app.use(express.static(root), (_req, _res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/checkLogin', (request: any, response:any) => {
    let details = request.body.details
    Database.isValidUser(details, response)
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log('Hosted: http://localhost:' + port);
});
