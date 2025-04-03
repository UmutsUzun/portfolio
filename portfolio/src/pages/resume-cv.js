import cvs from "../data/cvs";
import Link from "next/link";

export default function ResumeCV() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My CVs</h1>
      <div className="grid gap-6">
        {cvs.map((cv) => (
          <div key={cv.id} className="p-6 border rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{cv.title}</h2>
            <p className="text-gray-600 mt-2">{cv.description}</p>

            <div className="flex gap-4 mt-4">
              <Link href={cv.files.pdf} target="_blank">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  View
                </button>
              </Link>

              <button
                onClick={() => handleDownload(cv)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function handleDownload(cv) {
  const format = window.prompt("Which format do you want to download? (pdf or docx)");
  if (!format) return;

  const file = cv.files[format.toLowerCase()];
  if (file) {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  } else {
    alert("Selected format not available.");
  }
}

