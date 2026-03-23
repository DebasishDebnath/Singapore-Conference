import { Key } from "lucide-react";
import Heading from "../../components/Heading";
import React, { useState, useRef } from "react";

const keyWords = [
  "Artificial Intelligence",
  "Agentic Systems",
  "Intelligent Decision Making",
  "Generative AI",
  "Large Language Models",
  "Reinforcement Learning",
  "Multi-Agent Systems",
  "Edge Computing",
  "Internet of Things",
  "IoT",
  "Distributed Intelligent Systems",
  "Fog Computing",
  "Edge AI",
  "Digital Twins",
  "Cyber-Physical Systems",
  "Smart Infrastructure",
  "Industry 4.0",
  "Predictive Maintenance",
  "Cybersecurity",
  "Privacy",
  "Trustworthy AI",
  "Federated Learning",
  "Blockchain Security"
];

function PaperSubmission() {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleCheckboxChange = (id) => {
    if (selectedTracks.includes(id)) {
      setSelectedTracks(selectedTracks.filter((trackId) => trackId !== id));
    } else {
      if (selectedTracks.length < 3) {
        setSelectedTracks([...selectedTracks, id]);
      } else {
        alert("You can select a maximum of 3 tracks.");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      if (fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    setSelectedTracks([]);
    setSelectedFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedTracks.length === 0) {
      alert("Please select at least one keyword.");
      return;
    }

    if (!selectedFile) {
      alert("Please upload a manuscript document.");
      return;
    }

    const form = new FormData(e.target);
    const submitData = new FormData();
    
    submitData.append("title", form.get("title"));
    submitData.append("abstract", form.get("abstract"));
    submitData.append("authors", form.get("authors"));
    selectedTracks.forEach((keyword) => submitData.append("keywords", keyword));
    submitData.append("document", selectedFile);

    try {
      setIsSubmitting(true);
      const response = await fetch("http://192.168.1.226:5000/api/v1/manuscripts", {
        method: "POST",
        body: submitData, // Sending as multipart/form-data
      });

      if (response.ok) {
        alert("Manuscript submitted successfully!");
        e.target.reset(); // This triggers handleReset automatically
      } else {
        alert("Failed to submit manuscript. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting manuscript:", error);
      alert("An error occurred during submission. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center w-full">
      <Heading title1="Manuscript" title2="Submission" />
      <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-16 md:p-12 p-8 flex flex-col md:gap-10 gap-10 ">
        <form onSubmit={handleSubmit} onReset={handleReset} className="flex flex-col gap-6 poppins">
          <input type="hidden" />
          
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold text-gray-800 text-sm">
              Paper Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter paper title"
              required
              className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none"
            />
          </div>

          {/* Abstract */}
          <div className="flex flex-col gap-2">
            <label htmlFor="abstract" className="font-semibold text-gray-800 text-sm">
              Abstract <span className="text-red-500">*</span>
            </label>
            <textarea
              id="abstract"
              name="abstract"
              placeholder="Enter abstract"
              rows="3"
              required
              className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none fixed-resize"
            />
          </div>

          {/* Corresponding Author */}
          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="font-semibold text-gray-800 text-sm">
              Corresponding Author(s) <span className="text-red-500">*</span>
            </label>
            <textarea
              id="author"
              name="authors"
              placeholder="e.g. Author1, Author2, Author3..."
              rows="2"
              required
              className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-md text-sm outline-none fixed-resize"
            />
          </div>

          {/* Tracks (Checkboxes) */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 text-sm">
              Keywords <span className="text-red-500">*</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer w-fit">
                Please select up to 3 relevant keywords that best match the subject of your manuscript.
            </label>
            <div className="flex flex-col gap-2">
              {keyWords.map((keyword) => (
                <label key={keyword} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer w-fit">
                  <input
                    type="checkbox"
                    value={keyword}
                    checked={selectedTracks.includes(keyword)}
                    onChange={() => handleCheckboxChange(keyword)}
                    className="w-4 h-4 cursor-pointer accent-blue-theme"
                  />
                  {keyword}
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 text-sm">
              Upload Manuscript (PDF/Word) <span className="text-red-500">*</span>
            </label>
            <div
              className={`w-full p-8 border-2 border-dashed rounded-lg shadow-sm text-center flex flex-col items-center justify-center transition-colors ${
                isDragging
                  ? "border-[#102768] bg-blue-50"
                  : "border-gray-300 bg-gray-50 hover:bg-gray-100"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p className="text-sm text-gray-600 mb-4 poppins">
                {selectedFile ? (
                  <span className="font-medium text-blue-theme">{selectedFile.name}</span>
                ) : (
                  "Drag and drop your manuscript here, or"
                )}
              </p>
              <label
                htmlFor="file-upload"
                className="px-6 py-2.5 bg-blue-theme text-white rounded-xl text-sm font-medium cursor-pointer hover:bg-[#102768] transition-colors poppins"
              >
                {selectedFile ? "Change File" : "Browse Files"}
              </label>
              <input
                id="file-upload"
                type="file"
                name="Manuscript"
                accept=".pdf,.doc,.docx"
                required={!selectedFile}
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex flex-row-reverse items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 justify-center flex bg-blue-theme rounded-lg text-white font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-[#102768] transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Manuscript"}
            </button>
            <button
              type="reset"
              className="px-6 py-2.5 justify-center flex bg-gray-200 rounded-lg text-gray-700 font-medium text-center poppins text-sm h-fit w-fit whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaperSubmission;
