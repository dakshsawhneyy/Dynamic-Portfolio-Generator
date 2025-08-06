import React from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateOne = () => {
  const profile = JSON.parse(localStorage.getItem('portfolioData'));
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center font-sans">
      
      {/* Profile Image */}
      <img src={profile.image} alt="Profile" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-black" />

      {/* Name and About */}
      <h1 className="text-3xl font-bold mb-2">Hi, I'm {profile.name}</h1>
      <p className="text-gray-700 text-md mb-6">{profile.about}</p>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {profile.skills.split(',').map((skill, index) => (
            <span key={index} className="bg-black text-white px-3 py-1 rounded-full text-sm" >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio Site */}
      {profile.portfolio && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
          <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800" >
            Visit My Portfolio
          </a>
        </div>
      )}

      {/* Social Links */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Social Links</h2>
        <div className="flex justify-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Go Back Button */}
      <button onClick={() => navigate('/preview')} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition">
        Go Back
      </button>
    </div>
  );
};

export default TemplateOne;
