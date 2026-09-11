import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // To show success/error messages

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset(); // Clear the form
        },
        (error) => {
          setStatus("Failed to send. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently working towards new opportunities. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* We attach the 'ref' and the 'onSubmit' handler here */}
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Subject title..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          {/* Note: 'name' attribute must match your EmailJS template variables */}
          <input
            type="text"
            name="user_name"
            required
            placeholder="Enter name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Date/Time</label>
          <input type="text" name="time" required placeholder="Date/Time..." />
        </div>

        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Enter email..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            placeholder="Enter message..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>

        {/* Show success/error message below button */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
