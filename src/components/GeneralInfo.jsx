
import "../styles/Form.css";
import { useState } from "react";

function GeneralInfo({generalInfo, setGeneralInfo}) {
  
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  }

  function handleSubmit() {
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <section className="form-section">
      <h2>General Information</h2>

      {isEditing ? (
        <div>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              name="phoneNo"
              value={generalInfo.phoneNo}
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Full Name</h2>
          <h3>{generalInfo.name}</h3>

          <h2>Email</h2>
          <h3>{generalInfo.email}</h3>

          <h2>Phone Number</h2>
          <h3>{generalInfo.phoneNo}</h3>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;

