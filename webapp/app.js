// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();



// let users = [];

// router.post('/', (req, res) => {
//   const user = req.body;
//   users.push(user);
//   res.status(201).json(user);
// });

// router.get('/', (req, res) => {
//   res.json(users);
// });

// module.exports = router; // Export the router

const express = require('express');
const app = express();

app.use(express.json());



app.locals.users = [];

app.post('/users', (req, res) => {
  const user = req.body;
  app.locals.users.push(user);
  res.status(201).json(user);
});

app.get('/users', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.delete('/users', (req, res) => {
  app.locals.users = [];
  res.status(204).send();
});

module.exports = app;




