import React from 'react';

const About = () => {
const skills= [
  {
    name:" UI Designer" ,image:'/src/assets/icons/ruler-pen.png'
  },  {
    name:" Web Designer" ,image:'/src/assets/icons/code.png'
  },  {
    name:" Youtuber" ,image:'/src/assets/icons/download.png'
  },
 
]

  return (
    <div className=' px-7 md:px-10 sm:-mt-24 ' id='about'>
    <h1 className='text-3xl mt-5 text-primary font-semibold'>About Me</h1>
    <p className='text-white my-2 md:w-2/3 leading-[2]'>Hi, my name is Nilesh Prajapati , i am a webdesigner and youtuber .I have
    honed  my skills in web design and i have core understanding of styling principle.
    Here are the major skills  i have .{" "}</p>
     
     {/* expriences */}
     <div className='md:flex items-center my-7'>
      <p className='text-primary text-8xl font-bold'>0+</p>
      <p className='text-white text-2xl md:ml-5'>I am fresher.But i have done training and internship in webdesigning and done many static page there.</p>
     </div>

     {/* skills */}
     <div className=' flex flex-col md:flex-row justify-between'>
      {
        skills.map((skill,index) => <div key={index}
        className='skills md:w-[256px] md:h-[256px] rounded-2xl  bg-light hover:bg-primary flex flex-col items-baseline
         justify-center pl-10 my-3 md:m-3 p-5 shadow-sm transition-all duration-500 '>
          <img src={skill.image} alt="image"  />
          <p className='text-2xl mt-3 text-white font-semibold'>{skill.name}</p>
        </div>)
      }
     </div>
    </div>
  );
};

export default About;