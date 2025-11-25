import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    fatherName: "",
    address: "",
    designation: "",
    department: "",
    jobDescription: "",
    photo: null,
    photoPreview: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      photo: file,
      photoPreview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card", { state: formData });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Employee Information Form</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mobile No:</label>
          <input name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Father Name:</label>
          <input name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Designation:</label>
          <input name="designation" value={formData.designation} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <input name="department" value={formData.department} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Job Description:</label>
          <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Upload Photo:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
        </div>

        {formData.photoPreview && (
          <img
            src={formData.photoPreview}
            alt="Preview"
            style={{ width: "120px", marginTop: "10px", borderRadius: "6px" }}
          />
        )}

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;