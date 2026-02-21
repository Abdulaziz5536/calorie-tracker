import { useState } from "react";

function AddMeal({ addMeal, selectedDate }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addMeal({
      name,
      calories: Number(calories),
      protein: Number(protein),
      date: selectedDate,
    });

    setName("");
    setCalories("");
    setProtein("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Add Meal</h3>

      <input
        type="text"
        placeholder="Meal name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddMeal;