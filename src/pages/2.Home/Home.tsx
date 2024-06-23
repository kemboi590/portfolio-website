import { ReactTyped } from "react-typed";
import Potrait from '../../assets/images/kemboi.jpg'
import Resume from '../../assets/files/Resume.pdf';
import { HiDownload } from 'react-icons/hi'


export const Home = () => {
    return (
        // needs to have a short intro of myself on the left and a picture of me on the right
        //height fit content in tailwindcss is h-auto
        <section id="home" className="flex flex-col md:flex-row justify-center items-center h-fit py-[3.5rem] text-text-light" >
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="px-8 pb-8">
                    <h1 className="text-2xl md:text-4xl font-bold">Hi, I'm
                        {/* want to have */}
                        <span className='text-[#00df9a] ' >
                            <ReactTyped
                                className="pl-2"
                                strings={['Brian Kemboi']}
                                typeSpeed={120}
                                backSpeed={70}
                                loop />
                        </span>
                    </h1>

                    <p className="text-xl w-full md:w-[1/2] leading-relaxed text-justify">
                        Full-stack web development with strong foundation in Azure cloud solutions. As a dedicated community leader, I strive to foster collaboration and innovation within the tech community.
                    </p>

                    <a href={Resume} download className="mt-4 bg-[#00df9a] p-3 rounded-lg hover:bg-[#00b48a] transition duration-500 ease-in-out flex items-center space-x-2 w-[230px] text-lg md:text-xl ">
                        <span>Download Resume</span>
                        <HiDownload size={26}/>
                    </a>
                </div>
                {/* download for resume imported at the top */}

            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={Potrait} alt="Kemboi" className="w-60 h-60 rounded-lg transform transition duration-500 hover:scale-110 " />
            </div>
        </section>
    )
}
