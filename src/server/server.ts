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

app.get('/', (_req, res) => {
  res.send('')
})

app.post('/checkLogin', (request: any, response: any) => {
  let details = request.body.details
  if (isValidPasswordInput(details.password) && isValidEmailInput(details.email)) {
    Database.isValidUser(details, response)
  } else {
    response.send("sqli attemp")
  }
});

app.post('/registerNewUser', (request: any, response: any) => {
  let newUser = request.body.newUser
  if (
    isValidPasswordInput(newUser.password) &&
    isValidEmailInput(newUser.email) &&
    isValidNameInput(newUser.full_name)
  ) {
    Database.addNewUser(newUser, response);
  } else {
    response.send("sqli attemp");
  }
});

app.post('/addNewDog', (request: any, response: any) => {
  let newDog = request.body.dogDetails;
  let id = request.body.id;
  if (
    isValidNameInput(newDog.type) &&
    isValidNameInput(newDog.name) &&
    isValidNumberInput(newDog.chipNumber) &&
    isValidNumberInput(newDog.age) &&
    isValidNumberInput(id)
  ) {

    Database.addnewDog(newDog, id, response);
  } else {
    response.send("sqli attemp");
  }
});

app.post('/getUserDogsById', (request: any, response: any) => {
  let userId = request.body.id
  if (isValidNumberInput(userId)) {
    Database.getDogsByUserId(userId, response);
  } else {
    response.send("sqli attemp");
  }
});

function isValidEmailInput(email: string) {
  const specialCharsForEmail = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

  return !specialCharsForEmail.test(email)
}

function isValidPasswordInput(password: string) {
  const specialCharsForPassowrd = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return !specialCharsForPassowrd.test(password)
}

function isValidNameInput(name: string) {
  const specialCharsForName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return !specialCharsForName.test(name)
}

function isValidNumberInput(id: string) {
  const specialCharsForId = /^[0-9]+$/;

  return specialCharsForId.test(id)
}

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log('Hosted: http://localhost:' + port);
});
