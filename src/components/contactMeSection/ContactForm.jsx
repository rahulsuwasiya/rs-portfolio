import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080"; // Spring Boot backend URL

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "", error: false });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", error: false });

    try {
      const res = await axios.post(`${API_BASE}/user`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status >= 200 && res.status < 300) {
        setStatus({ loading: false, msg: "Message sent successfully ✅", error: false });
        resetForm();
      } else {
        setStatus({ loading: false, msg: "Failed to send message ❌", error: true });
      }
    } catch (err) {
      console.error("Error sending message:", err);
      const msg = err.response?.data?.message || err.message || "Server error";
      setStatus({ loading: false, msg: `Error: ${msg}`, error: true });
    }
  };

  return (
    <div>
      {status.msg && (
        <p className={status.error ? "text-red-400" : "text-green-400"}>
          {status.msg}
        </p>
      )}
      <form onSubmit={sendMessage} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={status.loading}
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-60"
        >
          {status.loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
