import "../styles/CVPreview.css"

function CVPreview({generalInfo, educationInfo, experienceInfo}) {
  return (
    <div className = "cv-preview">
      <h2 className = "preview-header">CV Preview</h2>

      <div className = "prev-group">
      <h3> General Info </h3>
      <p> {generalInfo.name}</p>
      <p> {generalInfo.email}</p>
      <p> {generalInfo.phoneNo}</p>
      </div>

      <div className = "prev-group">
      <h3> Education Info </h3>
      <p> {educationInfo.schoolName}</p>
      <p> {educationInfo.title}</p>
      <p> {educationInfo.date}</p>
      </div>

      <div className = "prev-group">
      <h3> Experience Info </h3>
      <p> {experienceInfo.companyName}</p>
      <p> {experienceInfo.position}</p>
      <p> {experienceInfo.responsibilities}</p>
      <p> {experienceInfo.startDate}</p>
      <p> {experienceInfo.endDate}</p>
      </div>
    </div>
  );
}

export default CVPreview;