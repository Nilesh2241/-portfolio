import React from 'react';

const Projects = () => {
const projects = [
  {
    title:"EduTech",
    description:"This is the programming learning platform.",
    photo:"src/assets/projects/download (1).png",
  },
    {
    title:"Greate Learning About",
    description:"This is the static about learning platform.",
    photo:"src/assets/projects/download (4).png",
  },
  {
    title:"E-commerce",
    description:"This is static e-commerce  page.",
    photo:"src/assets/projects/download (3).png",
  }, 
];

  return (
    <div className='px-7 md:px-10 my-8 ' id='projects'>
     <h1 className='text-3xl mt-5 text-primary font-semibold'>
     <span className='text-white'>Featured</span> Projects</h1>
     <div className='w-72 mt-1 rounded-xl bg-white h-1'></div>
    <p className='text-white my-2 md:w-2/3 leading-[2]'>
      I have done many web design projects,here maintion some projects there i am work properly.
      Some live,real world project also done.
    </p>
    {/* projects */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
      {
        projects.map((project,index)=><div key={index} className='flex flex-col shadow-sm md:w-[343px]
        bg-[#31313f] rounded p-4'>
          <a href={project.photo} className='mb-4'>
            <img src={project.photo} alt=""  />
          </a>
          <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
          <p className='text-white mt-1'>{project.description}</p>
          <div className="mt-5">
              <button
                className="btn bg-primary py-2 px-2 text-white rounded hover:bg-white hover:text-primary
            transition-all duration-500"
              >
                About Me
              </button>
              <button className="btn outline px-6 py-1.5 border-none text-white ml-5 rounded">
                Projects
              </button>
            </div>
        </div>)
      }
    </div>
    </div>
  );
};

export default Projects;