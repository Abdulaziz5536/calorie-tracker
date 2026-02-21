const express = require('express');
const app = express();
const mealModule = require('./models/meal-model');
const mealRoute = require('./routes/meal-route');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 4000;

mongoose.connect("mongodb://127.0.0.1:27017/calorieApp").then(() => console.log("mongoDB is connected"))
.catch(err => console.log(err));

app.use("/api/meals",mealRoute);


app.listen(PORT ,() => {
  console.log("server is running on port "+PORT);
  
})