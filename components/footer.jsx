import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002b5c] text-white md:px-24 px-6 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">AMITY UNIVERSITY RAJASTHAN</h2>
          <p>SP-1 Kant Kalwar, NH11C, RIICO Industrial Area</p>
          <p>Jaipur, Rajasthan - 303002</p>
          <p>Tel: 01426-405678</p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:iset@amity.jpr.edu"
              className="text-cyan-400 hover:underline"
            >
              iset@jpr.amity.edu
            </a>
          </p>
          <a
            href="https://www.amity.edu/jaipur/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            https://www.amity.edu/jaipur/
          </a>

          <p className="mt-4 text-xs">
            Copyright © AMITY UNIVERSITY RAJASTHAN
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-justify">Vision</h3>
          <p className="mb-4">To be a leading global university fostering innovation, research, and value-based education.</p>

          <h3 className="text-xl font-bold mb-2 text-justify">Mission</h3>
          <p>
            To nurture future leaders through excellence in academics, research, technology, holistic development, and social responsibility.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Locate Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.449787538291!2d75.95422687455333!3d27.17359667649264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396da704dc9bb91b%3A0xc7e3a30969781dd1!2sAmity%20University%20Jaipur%2C%20Kant%2C%20Rajasthan%20303002!5e0!3m2!1sen!2sin!4v1758004029851!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
          ></iframe>
          {/* <button className="mt-3 bg-[#005B96] hover:bg-[#004476] text-white font-semibold px-4 py-2 rounded-lg">
            How to reach Venue
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
