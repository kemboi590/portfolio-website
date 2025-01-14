import { ReactTyped } from "react-typed";
import Potrait from '../../assets/images/mydp.jpg'
import Resume from '../../assets/files/Resume.pdf';
import { HiDownload } from 'react-icons/hi'
import About from "../3.About/About";


export const Home = () => {
    return (
        <>
            <section id="home" className="flex flex-col md:flex-row justify-center items-center h-fit  md:pt-[3.5rem] pb-8 text-text-light relative" >
                <div className="w-full md:w-1/2 flex justify-center items-center z-30">
                    <div className="px-4 md:px-8 pb-8">
                        <h1 className="text-2xl font-bold">Hi, I'm
                            {/* React Type */}
                            <span className='text-[#00df9a]'>
                                <ReactTyped
                                    className="pl-2"
                                    strings={['Brian Kemboi']}
                                    typeSpeed={120}
                                    backSpeed={70}
                                    loop />
                            </span>
                        </h1>

                        <p className="text-xl 2xl:2xl leading-8 w-full md:w-[1/2]  h-fit">
                            A Software Engineer passionate about developing software applications which solve real world problems while meeting users expectations.
                            <br className="hidden md:block" />
                            As a dedicated community leader,I strive to foster collaboration and innovation within the tech community.
                        </p>

                        <a href={Resume} download className="mt-4 bg-[#00df9a] p-3 rounded-lg hover:bg-[#00b48a] transition duration-500 ease-in-out flex items-center space-x-2 w-[230px] text-lg md:text-xl">
                            <span>Download Resume</span>
                            <HiDownload size={26} />
                        </a>
                    </div>

                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center z-20">
                    <img src={Potrait} alt="Kemboi" className="w-1/2 rounded-lg transform transition duration-500 hover:scale-110" />
                </div>
            </section>
            <About />
        </>
    )
}
