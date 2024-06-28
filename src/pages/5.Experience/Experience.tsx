import { ExperienceData } from "../../components/ExperienceData"

export const Experience = () => {
    return (
        <div id="experience">
            <h1 className='text-xl md:text-4xl font-bold text-[#00df9a] text-center'>  Experience</h1>
            <div className='flex flex-col p-5 md:flex-wrap md:flex-row justify-center items-center h-fit gap-4 md:gap-8 xl:gap-10 md:pt-[3.5rem] pb-8 text-text-light'>
                {ExperienceData.map((experience) => {
                    return (
                        <div key={experience.id} className='flex bg-gray-800 w-full md:w-[48%] 2xl:w-[40%]  p-4 cursor-pointer transform transition duration-300 hover:-translate-y-1 gap-4 rounded-lg'>

                            <div className="w-[10%] flex justify-center items-start md:items-center">
                                <img src={experience.logo} alt={experience.title} className='w-12 rounded-lg' />
                            </div>
                            <div className='w-[90%]'>
                                <h5 className='text-[#00df9a] flex flex-col md:flex-row justify-between'><b>{experience.title}</b> <span className="text-text-light text-sm md:text-xs">{experience.period}</span></h5>
                                <p className='pt-2 leading-7 text-lg'>{experience.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
