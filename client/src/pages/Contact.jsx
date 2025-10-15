import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! Redirecting to Home...");
    window.location.href = "/";
  };

  return (
    <div className="container contact-page">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Whether you’d like to discuss game development, a project idea, or just say hello, feel free to reach out!
      </p>

      <div className="contact-grid">
        <div className="contact-card info-card">
          <h3>My Information</h3>
          <p>
            <strong>Email:</strong> nickwagner233@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (289) 971-5280
          </p>
          <p>
            <strong>Location:</strong> Guelph, ON, Canada
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/nick-wagner233/" target="_blank" rel="noreferrer">
              linkedin.com/in/nick-wagner233
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/WagnerNick" target="_blank" rel="noreferrer">
              github.com/WagnerNick
            </a>
          </p>
        </div>

        <div className="contact-card form-card">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input name="phone" placeholder="Phone" onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="5" onChange={handleChange} required></textarea>
            <button type="submit" className="btn primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
