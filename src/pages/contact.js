export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input type="text" name="name" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea name="message" rows="5" className="w-full border rounded px-3 py-2" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}
