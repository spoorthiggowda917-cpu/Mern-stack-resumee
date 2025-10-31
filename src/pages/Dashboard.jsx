import React, { useEffect, useState } from "react";
import {
  FilePenLineIcon,
  PlusIcon,
  UploadCloudIcon,
  UploadCloud,
  TrashIcon,
  PencilIcon,
  XIcon,
} from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#16a34a"];

  // Load dummy resume data
  const [resumes, setResumes] = useState(dummyResumeData);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [allResumes, setAllResumes] = useState([]);
  const navigate = useNavigate();

  // Load dummy resume data
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  const createResume = async (event) => {
    event.preventDefault();
    setShowCreateResume(false);//This closes the upload popup modal.
    navigate("/app/builder/res123");
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setShowUploadResume(false);
    navigate("/app/builder/res123");
  };

  const editTitle = (e) => {
    e.preventDefault();

    setAllResumes((prevResumes) =>
      prevResumes.map((resume) =>
        resume._id === editResumeId ? { ...resume, title } : resume
      )// update title only
    );

    setEditResumeId("");
    setTitle("");
  };

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resume?"
    );
    if (confirm) {
      setAllResumes((prev) =>
        prev.filter((resume) => resume._id !== resumeId)
      );
    }
  };
    {/*window.confirm() → Opens a confirmation popup asking the user if they really want to delete.
Returns true if user clicks OK, false if they click Cancel.
if (confirm) → Runs only if the user clicked OK.
setAllResumes(prev => prev.filter(...)) →
Takes the previous state (prev) — an array of all resumes.
.filter() removes the resume whose _id matches resumeId.
Updates the state with the new filtered array.*/}

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-linear-to-brr from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, Spoorthi
        </p>

        {/* Create & Upload Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[350px]" />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];

            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${resume._id}`)} // ✅ Corrected navigation
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />

                <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>

                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-1 right-1 hidden group-hover:flex items-center gap-1"
                >
                  <TrashIcon
                    onClick={() => deleteResume(resume._id)}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer"
                  />
                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume._id);
                      setTitle(resume.title);
                    }}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors cursor-pointer"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* CREATE RESUME MODAL */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2>Create a Resume</h2>
              <input
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 border focus:border-green-600 ring-green-600 rounded outline-none"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                Create Resume
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
      </div>

      {/* UPLOAD RESUME MODAL */}
      {showUploadResume && (
        <form
          onSubmit={uploadResume}
          onClick={() => setShowUploadResume(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
          >
            <h2>Upload a Resume</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border focus:border-green-600 ring-green-600 rounded outline-none"
              required
            />
            <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
              <label htmlFor="resume-input" className="block text-sm text-slate-700">
                Select resume file
                <div>
                  {resume ? (
                    <p className="text-green-700">{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloud className="size-14 stroke-1" />
                      <p>Upload resume</p>
                    </>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="resume-input"
                accept=".pdf"
                hidden
                onChange={(e) => setResume(e.target.files[0])}
              />
            </div>
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Upload Resume
            </button>
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              onClick={() => {
                setShowUploadResume(false);
                setTitle("");
              }}
            />
          </div>
        </form>
      )}

      {/* EDIT RESUME MODAL */}
      {editResumeId && (
        <form
          onSubmit={editTitle}
          onClick={() => setEditResumeId("")}
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
          >
            <h2>Edit Resume Title</h2>
            <input
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border focus:border-green-600 ring-green-600 rounded outline-none"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Update
            </button>
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              onClick={() => {
                setEditResumeId(false);
                setTitle("");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default Dashboard;
