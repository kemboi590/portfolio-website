import { TechnologiesData } from "../../components/TechnologiesData";

export const Technologies = () => {
  return (
    <>
      <h1 className='text-xl md:text-4xl font-bold text-[#00df9a] text-center pt-8 pb-12'> 🖥 Technologies 💡</h1>
      <div className='flex flex-wrap justify-center items-center p-5 gap-4 md:gap-8'>
        {TechnologiesData.map((tech) => (
          <div key={tech.id} className='relative group w-[45%] border-2 bg-white  md:w-[15%] p-4 rounded-lg cursor-pointer transform transition duration-300 hover:-translate-y-1'>
            <img src={tech.techLogo} alt={tech.techName} className='w-full h-[100px] rounded-lg object-contain' />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='text-xl font-bold transition-transform duration-500 transform translate-x-full group-hover:translate-x-0'>{tech.techName}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
