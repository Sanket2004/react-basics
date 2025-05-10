import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null); // Store submitted data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store submitted data
    setFormData({ name: "", phone: "", message: "" }); // Clear form after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
          minLength={10}
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>

      {/* Show submitted data after submission */}
      {submittedData && (
        <div>
          <h1>Submitted Data</h1>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
