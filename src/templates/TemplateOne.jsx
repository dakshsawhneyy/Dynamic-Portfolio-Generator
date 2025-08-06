import { useNavigate } from 'react-router-dom';

const TemplateOne = () => {
  const profile = JSON.parse(localStorage.getItem('portfolioData'));
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-4 py-10 font-sans">

      <img src={profile.image} alt="Profile" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-lg mb-6" />

      <h1 className="text-4xl font-extrabold tracking-wide">{profile.name}</h1>
      <p className="mt-3 text-gray-300 max-w-2xl text-center">{profile.about}</p>

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {profile.skills.split(',').map((skill, index) => (
            <span key={index} className="bg-white text-black text-sm px-4 py-1 rounded-full shadow hover:scale-105 transition" > {skill.trim()} </span>
          ))}
        </div>
      </div>

      {profile.portfolio && (
        <div className="mt-10 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Portfolio</h2>
          <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:brightness-110" > Visit My Portfolio</a>
        </div>
      )}

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Social Links</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg shadow-md" > GitHub </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-700 hover:bg-blue-600 text-white text-center py-2 rounded-lg shadow-md">LinkedIn</a>
        </div>
      </div>

      <button onClick={() => navigate('/preview')} className="mt-12 px-6 py-2 bg-white text-black rounded-full shadow hover:bg-gray-100" >
        Go Back
      </button>
    </div>
  );
};

export default TemplateOne;
