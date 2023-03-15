const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const connectDB = require('./config/db');

/* PREVIOUSLY USED TO CONNECT TO MONGO DB */
// connectDB();
// app.use('/', require('./routes/cocktailRoutes'));

const apiRouter = require('./routes/apiRouter.js'); 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// FOLLOWING LINES FOR MIGRATION TO SQL DATABASE. ONLY NEEDED TO BE RUN ONCE TO POPLULATE DB 
// (WILL CREATE DUPLICATES IF RUN MORE THAN ONCE!)

// const cocktailJSON = require('../cocktails');
// const { insertCocktail } = require('./config/pool')
// cocktailJSON.forEach(element => {
//   console.log(element);
//   insertCocktail(element);
// });


app.get('/', (req, res) => {
  res.status(200).json('GET request received');  
}); 


app.use('/api', apiRouter); 


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', 
    status: 400, 
    message: { err: ' An error occured' }, 
  }
  const errorObj = Object.assign({}, defaultErr, err); 
  return res.status(errorObj.status).json(errorObj); 
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
