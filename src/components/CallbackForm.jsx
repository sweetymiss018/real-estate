import React, { useState } from "react";
import emailjs from "emailjs-com";

const CallbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!authorized) {
      alert("You must authorize us to contact you.");
      return;
    }

    emailjs
      .send(
        "service_pb2hfy9",
        "template_z6n7ijl",
        { name, email, phone, message },
        "lVu6VEmeRmo8Ug6-k"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setAuthorized(false);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message.");
        }
      );
  };

  return (
    <div
  id="callback"
  className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#16263b] px-2 py-4 sm:flex-row sm:justify-between sm:items-center sm:py-2 sm:px-10"
>
  {/* Request Callback Text */}
  <div className="absolute top-5 left-5 sm:top-10 sm:left-10">
    <span className="text-7xl sm:text-8xl md:text-8xl lg:text-7xl font-serif font-extrabold bg-clip-text text-[#BC9170]">
      Request Callback
    </span>
  </div>

  <iframe
        className="map w-1/2 hidden"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7484.503512911215!2d85.8454036!3d20.289843900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a14fd5712c61%3A0x9b02a71f624c28dd!2sDaya%20Consultancy%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689834516745!5m2!1sen!2sin"
        // width={150}
        height={400}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

  {/* Bottom Text */}
  <div className="absolute bottom-3 left-3 w-full text-center sm:text-left sm:bottom-6 sm:left-10">
    <span className="text-3xl sm:text-md md:text-5xl lg:text-4xl font-serif font-extrabold bg-clip-text text-[#bfb2a1]">
      You're just a call away from <br /> getting your dream Home!!!
    </span>
  </div>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-xl w-full max-w-[90%] sm:max-w-lg md:max-w-lg lg:max-w-xl space-y-3 sm:absolute sm:right-20 md:right-36 lg:right-10 hover:scale-105 transition-transform duration-500 ease-in-out"
  >
    <h2 className="text-lg sm:text-2xl md:text-3xl text-white text-center font-semibold">
      Get In Touch
    </h2>

    {/* Name Input */}
    <div>
      <label className="block text-white text-sm md:text-base mb-2">
        Name
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 md:p-2.5 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
        placeholder="Enter your name"
        required
      />
    </div>

    {/* Email Input */}
    <div>
      <label className="block text-white text-sm md:text-base mb-2">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 md:p-2.5 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
        placeholder="Enter your email"
        required
      />
    </div>

    {/* Mobile Input */}
    <div>
      <label className="block text-white text-sm md:text-base mb-2">
        Mobile
      </label>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 md:p-2.5 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
        placeholder="Enter your mobile number"
        required
      />
    </div>

    {/* Message Input */}
    <div>
      <label className="block text-white text-sm md:text-base mb-2">
        Message
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 md:p-2.5 bg-white/20 text-white placeholder-gray-300 border border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent transition-all"
        placeholder="Your message..."
        required
      />
    </div>

    {/* Checkbox */}
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={authorized}
        onChange={(e) => setAuthorized(e.target.checked)}
        className="h-4 w-4 md:h-5 md:w-5 text-purple-600 bg-transparent border-2 border-white rounded focus:ring-2 focus:ring-purple-600"
      />
      <span className="text-white text-sm md:text-base">
        I authorize to contact me
      </span>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 md:py-2 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50 transition-all text-base font-semibold"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default CallbackForm;


