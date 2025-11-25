import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) return <h2>No Details Available</h2>;

  return (
    <div style={{}}>
      <h2 style={{fontSize:"38px",textAlign:"center"}}>Employee Full Details</h2>

      <div
        style={{
          maxWidth: "500px",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 12,
          marginTop: 20,
          background: "#fff",
          marginLeft:"500px"
        }}
      >
        <img
          src={data.photoPreview}
          alt="Employee"
          style={{
            width: "100%",
            borderRadius: 8,
            marginBottom: 15,
            height:"450px",
            objectFit:"cover"
          }}
        />

        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
        <p><strong>Father Name:</strong> {data.fatherName}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>Designation:</strong> {data.designation}</p>
        <p><strong>Department:</strong> {data.department}</p>
        <p><strong>Job Description:</strong> {data.jobDescription}</p>

        <button
          style={{
            marginTop: 20,
            padding: "15px",
            background: "#333",
            color: "#fff",
            borderRadius: 6,
            cursor: "pointer",
            width:"100%",
            fontSize:"18px"
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Detail;