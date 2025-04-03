import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    fetch("https://formspree.io/f/mzzejayq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      {success && (
        <div className="p-4 mb-4 bg-green-100 text-green-800 rounded">
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}

