// import express from 'express';
// import path from 'path';
// // const path = require('path');
// const userRoutes= require('./integrated');


// const app = express();
// app.use(express.json());

// const PORT = 3000;

// // Middleware to serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/users', userRoutes);
// app.get('/',(req, res)=>{
//     calculation(num1, num2)={
        

//     }
//     res.render('index.html')
// })


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// export default app;

// app.js



// server.js
const app = require('./integrated');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
