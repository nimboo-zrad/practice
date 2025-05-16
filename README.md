# Seting up an expressjs server!
## express: 
  - Installation: ``` npm install express ```
  - Usage:
``` 
import express from 'express'; 
const app = express();
```
## dotenv:
  - Installation: ``` npm install dotenv ```
  - Usage: 
```
import 'dotenv/config';
process.env.YOURVARIABLE; 
```
## nodemon:
  - Installation: ```npm install nodemon```
  - Usage: in package.json file you can write a script to use it or use it directly to run your server: 
```
nodemon yourServer.mjs
```

## ejs:
  - Installation: ```npm install ejs```
  - Usage: 
```
app.set("view engine", "ejs");
app.set("views", "path/toYour/directory");
```
## express-validator:
  - Installation: ```npm install express-validator```
  - Usage: there are 2 ways to use it:
1. using body method:
```
import {body, validationResult, matchedData} from 'express-validator';
app.post('/users',
[body('email').notEmpty().withMessage("email must not be empty") 
body('password').notEmpty().withMessage("password must not be empty")],
(req, res) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) return res.status(400).json({errors: errors.array()});
res.json({success: true, data: matchedData(req)});
});

```
2. using schema: 
```
import {checkSchema, validationResult, matchedData} from 'express-validator';
const user = {
  username: {
    notEmpty: {
      withMessage: "username must not be empty"
    }
  },
  password: {
    notEmpty: {
      withMessage: "password must not be empty"
    }
  }
}

app.post('/users', checkSchema(user), (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty) return res.status(400).json({errors: errors.array()});
res.json({success: true, data: matchedData(req)});
})
```
