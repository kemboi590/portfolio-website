import React, { useState } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });  //used to update the state of the form data
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_0uncijm',
      'template_uk97u5c',
      formData,
      'r01DlyjDbhqKbSD1x'
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
      <h1 className='text-xl md:text-4xl font-bold text-[#00df9a] text-center pt-10 pb-10'>📧 Contact Me 📲 </h1>

      <div className='flex flex-col md:flex-row p-5 justify-center items-center h-fit gap-4 md:gap-8 pb-10 text-text-light'>
        <div className='flex flex-col w-full md:w-[30%] space-y-4'>
          <div className='bg-gray-800 p-5 rounded-lg text-center flex flex-col items-center'>
            <MdLocationOn className='text-[#00df9a] text-2xl mb-2' />
            <h3 className='text-[#00df9a] text-lg md:text-xl'>Location</h3>
            <p>Kutus, Kenya</p>
          </div>
          <div className='bg-gray-800 p-5 rounded-lg text-center flex flex-col items-center'>
            <MdEmail className='text-[#00df9a] text-2xl mb-2' />
            <h3 className='text-[#00df9a] text-lg md:text-xl'>Email</h3>
            <p>bkemboi590@gmail.com</p>
          </div>
          <div className='bg-gray-800 p-5 rounded-lg text-center flex flex-col items-center'>
            <MdPhone className='text-[#00df9a] text-2xl mb-2' />
            <h3 className='text-[#00df9a] text-lg md:text-xl'>Phone</h3>
            <p>(+254) 768353360</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='flex flex-col w-full md:w-[50%] bg-gray-800 p-5 rounded-lg justify-center '>
          <h2 className='text-xl md:text-2xl font-bold text-[#00df9a] text-center mb-5'>Reach Out!</h2>
          <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Full Name'
              className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] md:w-[90%]'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
              className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] [#00df9a] md:w-[90%]'
              required
            />
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
              className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] [#00df9a] md:w-[90%]'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              rows={4}
              className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] resize-none [#00df9a] md:w-[90%]'
              required
            ></textarea>
            <button
              type='submit'
              className='p-2 bg-[#00df9a] text-black rounded-lg hover:bg-white hover:text-black transition duration-300 w-[25%]'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
