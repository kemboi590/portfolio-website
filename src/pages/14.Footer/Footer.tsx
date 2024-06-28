import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Connect with Me</h2>
          <p>Follow me on my social media platforms</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/kibichii-brian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0e76a8]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://mlsa.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f25022]"
            aria-label="MLSA"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://facebook.com/kibichii.brian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1877f2]"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com/kibichii_brian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#1da1f2]"
            aria-label="Twitter"
          >
            <FaTwitter size={30} />
          </a>

        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
