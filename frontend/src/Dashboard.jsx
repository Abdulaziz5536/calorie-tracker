import { useEffect, useState } from "react";
import AddMeal from "./AddMeal";
import MealList from "./MealList";
import SummaryCard from "./SummaryCard";


function Dashboard() {
  const [meals, setMeals] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/meals/date/${selectedDate}`
      );
      const data = await res.json();
      setMeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [selectedDate]);

  
  const addMeal = async (meal) => {
    await fetch("http://localhost:4000/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meal),
    });

    fetchMeals();
  };

  
  const deleteMeal = async (id) => {
    await fetch(`http://localhost:4000/api/meals/${id}`, {
      method: "DELETE",
    });

    fetchMeals();
  };

  
  const updateMeal = async (id, updatedMeal) => {
    await fetch(`http://localhost:4000/api/meals/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMeal),
    });

    fetchMeals();
  };

  
  const totalCalories = meals.reduce(
    (acc, meal) => acc + meal.calories,
    0
  );

  const totalProtein = meals.reduce(
    (acc, meal) => acc + meal.protein,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Calorie Tracker</h1>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <SummaryCard
        calories={totalCalories}
        protein={totalProtein}
      />

      <AddMeal addMeal={addMeal} selectedDate={selectedDate} />

      <MealList
        meals={meals}
        deleteMeal={deleteMeal}
        updateMeal={updateMeal}
      />
    </div>
  );
}

export default Dashboard;