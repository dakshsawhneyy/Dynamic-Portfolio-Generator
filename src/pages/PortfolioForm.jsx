import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PortfolioForm = () => {
  
  // Creating Form State
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    skills: '',
    portfolio: '',
    github: '',
    linkedin: '',
    image: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Storing formdata in local storage
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    console.log(formData)

    alert('Portfolio details submitted successfully!');
    
    // Reseting the values after submission
    setFormData({
        name: '',
        about: '',
        skills: '',
        portfolio: '',
        github: '',
        linkedin: '',
        image: ''
    })
    
    // navigating to /preview
    navigate('/preview');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5 justify-center items-center h-screen'>
        <h1 className="text-3xl font-bold my-8">Add your details</h1>
        {/* Using ...formData ensures previous field values are retained when updating a single field. */}
        <input placeholder='Enter your name' value={formData['name']} onChange={(e) => setFormData({...formData, name:e.target.value})} type='text' id='name' className='py-2 px-1 w-[300px] border' required />
        <input placeholder='About' type='text' value={formData['about']} id='about' onChange={(e) => setFormData({...formData, about:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='skills (seperate by comma)' type='text' id='skills' value={formData['skills']} onChange={(e) => setFormData({...formData, skills:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Portfolio URL [OPTIONAL]' value={formData['portfolio']} onChange={(e) => setFormData({...formData, portfolio:e.target.value})} type='url' id='portfolio' className='py-2 px-1 w-[300px] border' />
        <input placeholder='GitHub Profile URL' value={formData['github']} type='url' id='github' onChange={(e) => setFormData({...formData, github:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='LinkedIn Profile URL'  type='url' id='linkedin' value={formData['linkedin']} onChange={(e) => setFormData({...formData, linkedin:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <input placeholder='Profile Image URL'  type='url' id='image' value={formData['image']} onChange={(e) => setFormData({...formData, image:e.target.value})} className='py-2 px-1 w-[300px] border' required />
        <button type="submit" className="text-white bg-black py-2 px-2 rounded">Submit</button>
      </div>
    </form>
  )
}

export default PortfolioForm
