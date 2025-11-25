import { useLocation, useNavigate } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) return <h2>No Employee Data Found</h2>;

  return (
    <div style={{ padding: 30 }}>
      <h2>Employee Card</h2>

      <div
        style={{
          width: 300,
          border: "1px solid #ccc",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
          marginTop: 20,
        }}
      >
        <img
          src={data.photoPreview}
          alt="Employee"
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <h3>{data.name}</h3>
        <p><strong>Designation:</strong> {data.designation}</p>
        <p><strong>Department:</strong> {data.department}</p>

        <button
          style={{
            marginTop: 15,
            padding: "10px 15px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
          onClick={() => navigate("/detail", { state: data })}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;