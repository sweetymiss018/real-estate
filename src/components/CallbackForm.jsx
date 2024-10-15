
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const CallbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!authorized) {
      alert("You must authorize us to contact you.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        { name, email, message },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent!');
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
          setAuthorized(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message.');
        }
      );
  };

  return (
    <div id='callback' className="relative flex items-center justify-center min-h-screen w-full bg-sky-950 z-[200]">
      <div className="absolute top-10 left-10">
        <span className="text-8xl font-serif font-extrabold bg-clip-text text-[#e1ac6b]">
          Request <br /> Callback <br/>
        </span>
      </div>
      <div className="absolute bottom-8 px-4 w-full  ">
      <span className=" absolute bottom-0 text-4xl  font-serif font-extrabold bg-clip-text text-[#bfb2a1]">
          You're just a call away from <br/> getting your dream Home!!!
        </span>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl w-1/3 space-y-2 absolute right-20 transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl text-white text-center font-semibold">Get In Touch</h2>
        <div>
          <label className="block text-white text-lg mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-white text-lg mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-white text-lg mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
            placeholder="Your message..."
            required
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
            className="h-5 w-5 text-purple-600 bg-transparent border-2 border-white rounded focus:ring-2 focus:ring-purple-600"
          />
          <span className="text-white text-lg">I authorize to contact me</span>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50 transition-all text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CallbackForm;
