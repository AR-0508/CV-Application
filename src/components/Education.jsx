import {useState} from "react";

function Education({educationInfo, setEducationInfo}){
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value
        setEducationInfo({
            ...educationInfo,
            [name] : value
        })
    }

    function handleEdit(){
        setIsEditing(true);
    }

    function handleSubmit(){
        setIsEditing(false);
    }

    return (
    <section className="form-section">
      <h2>Education</h2>


        {isEditing ? (
        <div>
        <div className="form-group">
            <label htmlFor="schoolName">School Name</label>

            <input
              id="schoolName"
              type="text"
              name="schoolName"
              value={educationInfo.schoolName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>

            <input
              id="title"
              type="text"
              name="title"
              value={educationInfo.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Study</label>

            <input
              id="date"
              type="date"
              name="date"
              value={educationInfo.date}
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          </div>
        ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>School Name</h2>
          <h3>{educationInfo.schoolName}</h3>

          <h2>Title</h2>
          <h3>{educationInfo.title}</h3>

          <h2>Date of Study</h2>
          <h3>{educationInfo.date}</h3>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
            </div>
        )}
    </section>
  );
}

export default Education;