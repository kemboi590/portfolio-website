import { projectsData } from "../../components/ProjectsData";


const Projects = () => {
    return (
        <div id="projects">
            <h1 className='text-xl md:text-4xl font-bold text-[#00df9a] text-center pt-12'> ✨ Featured Projects ✨ </h1>
            <div className='flex flex-col md:flex-row p-5 md:flex-wrap justify-center items-center h-fit gap-4 md:gap-8 md:pt-14 pb-10 text-text-light '>
                {projectsData.map((project) => (
                    <div key={project.id} className='flex flex-col justify-center items-center bg-gray-800 w-full md:w-[30%] h-[550px] md:h-[500px] gap-5 cursor-pointer transform transition duration-300 hover:-translate-y-1 rounded-lg '>
                        <div className="w-full flex justify-center items-center " >
                            <img src={project.projectLogo} alt={project.projectName} className='rounded-lg w-full px-2 h-[100px] md:h-[150px] object-scale-down' />
                        </div>
                        <div className='text-xl leading-8 p-4'>
                            <h3 className='flex items-center justify-center mb-4 text-[#00df9a] '>
                                <b>{project.projectName}</b>
                            </h3>
                            <p className=' mb-4 text-lg md:text-base'>{project.projectDescription}</p>
                            <div className='flex flex-wrap justify-evenly items-center mb-4'>
                                {project.projectTechnologies.map((tech: string, index) => (
                                    <span key={index} className='px-2 m-2 bg-[#00df9a] text-black rounded-lg text-sm'>{tech}</span>
                                ))}
                            </div>
                            <div className='flex justify-around'>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='block  rounded-lg p-2 text-base bg-[#00df9893] hover:bg-white hover:text-black transition duration-300 ' >
                                    Live Link
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='block rounded-lg p-2 text-base border-solid border-2 border-white-600  hover:border-[#00df9893] transition duration-300 ' style={{ width: 'fit-content ' }}>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
