import { useState } from "react";

export default function UploadSection() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  /**
   * Handles changes to the file input element.
   * @param {object} e The event object.
   */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check if the file is a valid PDF file before setting it as the resume.
    if (file && file.type === "application/pdf") {
      setResume(file);
    } else {
      // If the file is not a valid PDF file, alert the user.
      alert("Please upload a valid PDF file.");
    }
  };

  /**
   * Deletes the currently uploaded resume file.
   */
  const handleDeleteFile = () => {
    setResume(null);
  };

  /**
   * Handles changes to the job description input field.
   * @param {object} e The event object.
   */
  const handleJobDescriptionChange = (e) => {
    if (e.target.value.length <= 4000) {
      setJobDescription(e.target.value);
    }
  };

  /**
   * Handles the resume rewrite process.
   * Alerts the user if either the resume or job description is missing.
   */
  const handleRewrite = () => {
    if (!resume || !jobDescription) {
      alert("Please upload a resume and enter a job description.");
      return;
    }

    console.log("Resume:", resume);
    console.log("Job Description:", jobDescription);
  };

  return (
    <section id="upload">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rewrite Your Resume
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Upload your resume and paste the job description to optimize it for
          your dream job.
        </p>

        {/* Upload Form Section */}
        <div className="bg-gray-100 rounded-lg p-8">
          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Upload Resume
              <span className="text-sm text-gray-500"> (PDF Only)</span>
            </label>
            <div className="relative flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-5 hover:border-blue-400 focus-within:border-blue-500 transition">
              {!resume ? (
                <>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-gray-600 text-sm mt-2">
                      click to upload your file
                    </p>
                    <p className="text-xs text-gray-400">
                      (Accepted format: PDF)
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-sm">{resume.name}</span>
                  <button
                    type="button"
                    onClick={handleDeleteFile}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-6 relative">
            <label className="block text-lg text-gray-700 font-semibold mb-2">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition"
              placeholder="Paste the job description here..."
            ></textarea>
            <div className="text-sm text-gray-500 absolute right-3 bottom-3">
              {jobDescription.length}/4000
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleRewrite}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition"
          >
            Rewrite Resume
          </button>
        </div>
      </div>
    </section>
  );
}
