//imports:
import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import 'dotenv/config';
import {checkSchema, body, validationResult, matchedData} from 'express-validator';
import {users} from './validation/users.mjs';

//variables:
const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const host = process.env.localhost;
const port = process.env.myport;

//middlewares:
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, '/src/pages'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(dirname, '/src')));

//listen:
app.listen(port, host, console.log(`The server is running on ${host}:${port}`));

//get:
app.get('/', (req, res) => {
  res.render('home');
});

//post:
app.post('/users',checkSchema(users), (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
  res.json({success: true, data: matchedData(req)});
})
