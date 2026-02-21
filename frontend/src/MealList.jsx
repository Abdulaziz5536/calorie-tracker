import { useState } from "react";

function MealList({ meals, deleteMeal, updateMeal }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Meals</h3>

      {meals.map((meal) => (
        <div
          key={meal._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {editingId === meal._id ? (
            <>
              <input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
              <input
                type="number"
                value={editData.calories}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    calories: Number(e.target.value),
                  })
                }
              />
              <input
                type="number"
                value={editData.protein}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    protein: Number(e.target.value),
                  })
                }
              />
              <button
                onClick={() => {
                  updateMeal(meal._id, editData);
                  setEditingId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <strong>{meal.name}</strong>
              <p>
                {meal.calories} kcal | {meal.protein} g protein
              </p>
              <button
                onClick={() => {
                  setEditingId(meal._id);
                  setEditData(meal);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteMeal(meal._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default MealList;