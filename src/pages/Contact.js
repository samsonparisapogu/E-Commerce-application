import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please Enter Name");
      return;
    }

    alert("Form Submitted Successfully");
  };

  return (
    <div>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;