const express = require("express");
const router = express.Router();
const Meal = require("../models/meal-model");


router.get("/", async (req, res) => {
  try {
    const meals = await Meal.find().sort({ date: -1 });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, calories, protein, date } = req.body;

    const newMeal = new Meal({
      name,
      calories,
      protein,
      date,
    });

    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedMeal = await Meal.findByIdAndDelete(req.params.id);

    if (!deletedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedMeal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.json(updatedMeal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;



