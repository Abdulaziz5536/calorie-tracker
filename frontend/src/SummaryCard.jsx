function SummaryCard({ calories, protein }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Daily Summary</h3>
      <p>Total Calories: {calories} kcal</p>
      <p>Total Protein: {protein} g</p>
    </div>
  );
}

export default SummaryCard;