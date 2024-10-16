import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const CallRequestPopup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Show popup when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage("Your call request has been sent!");
        },
        (error) => {
          console.log(error.text);
          setResponseMessage("Failed to send request. Please try again.");
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      message: ""
    });

    // Hide popup after submission
    setTimeout(() => setIsPopupVisible(false), 5000);
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center font-serif items-center z-[100]">
          <div className="relative  bg-[#cabec0] p-10  w-full rounded-xl shadow-2xl max-w-lg  transform transition-all duration-300 ease-in-out">
            <button
              className="absolute top-2 right-4 text-gray-600 text-5xl hover:text-gray-900 "
              onClick={() => setIsPopupVisible(false)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Request a Call
            </h2>

            <form onSubmit={sendEmail} className="space-y-5">
              <div className="border-b-2 border-gray-600 my-2">
                {/* <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                  Your Name
                </label> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 my-3 rounded-lg bg-[#cabec0] outline-none  placeholder-gray-700 transition"
                />
              </div>

              <div className="border-b-2 border-gray-600 my-2 ">
                {/* <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label> */}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit number"
                  className="w-full  py-2 my-3 rounded-lg bg-[#cabec0] outline-none placeholder-gray-700 transition"
                />
              </div>

              <div className="border-b-2 border-gray-600 my-2 "> 
                {/* <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                  Message (Optional)
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  
                  placeholder="(Optional)Any additional information..."
                  className="w-full  py-2 my-3 bg-[#cabec0] rounded-lg placeholder-gray-700 transition outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold px-6 py-2  rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                Submit Request
              </button>
            </form>

            {responseMessage && (
              <div className="mt-4 text-green-600 font-semibold text-center">
                {responseMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CallRequestPopup;
