import { useState } from "react";

function Experience() {
    const [experienceInfo, setExperienceInfo] = useState({
        companyName : "",
        position : "",
        responsibilities : "",
        startDate : "",
        endDate : ""
    });
 
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setExperienceInfo({
      ...experienceInfo,
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
      <h2>Practical Experience</h2>

      {isEditing ? (
        <div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>

            <input
              id="companyName"
              type="text"
              name="companyName"
              value={experienceInfo.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>

            <input
              id="position"
              type="text"
              name="position"
              value={experienceInfo.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">Responsibilities</label>

            <textarea
              id="responsibilities"
              name="responsibilities"
              value={experienceInfo.responsibilities}
              onChange={handleChange}
            >
            </textarea>
            </div>

              <div className="form-group">
            <label htmlFor="startDate">Start Date</label>

            <input
              id="startDate"
              type="date"
              name="startDate"
              value={experienceInfo.startDate}
              onChange={handleChange}
            />
          </div>

            <div className="form-group">
            <label htmlFor="endDate">End Date</label>

            <input
              id="endDate"
              type="date"
              name="endDate"
              value={experienceInfo.endDate}
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Company Name</h2>
          <h3>{experienceInfo.companyName}</h3>

          <h2>Position</h2>
          <h3>{experienceInfo.position}</h3>

          <h2>Responsibilities</h2>
          <h3>{experienceInfo.responsibilities}</h3>

          <h2>Start Date</h2>
          <h3>{experienceInfo.startDate}</h3>

          <h2>End Date</h2>
          <h3>{experienceInfo.endDate}</h3>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
}

export default Experience;