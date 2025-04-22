import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://formspree.io/f/xoqgplnk", form);

      if (res.status === 200) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">Thank You, {form.name}!</h2>
        <p className="text-base">I’ll get back to you soon ✨</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control max-w-md mx-auto gap-4 bg-base-100 shadow-lg p-6 rounded-xl flex flex-col"
    >
      <h2 className="text-xl font-semibold text-center">Contact Me</h2>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Agus Sampurno"
          className="input input-bordered w-full"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="input input-bordered w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="label pb-1">
          <span className="label-text font-medium">Your Message</span>
        </label>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full"
          placeholder="Type your message here..."
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-6">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
