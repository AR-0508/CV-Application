import "../styles/Form.css";

function GeneralInfo() {
  return (
    <section className="form-section">
      <h2>General Information</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>

        <input
          id="name"
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>

        <input
          id="phone"
          type="tel"
        />
      </div>

      <button type="button">
        Submit
      </button>
    </section>
  );
}

export default GeneralInfo;