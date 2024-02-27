import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-screen text-center" id='about'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        <div className="lg:w-1/2 px-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-blue-700">About Us</h2>
          <p className="text-lg md:text-lg lg:text-lg font-serif">
            The Sankalp Youth Foundation (SYF) is an Indian social organization registered under the Indian Societies Registration Act 1860 on 14th February 2023 in the Nainital district of Uttarakhand. The organization actively serves as a catalyst in villages facing the most difficulty accessing government services and suffering from a lack of health, livelihood, drinking water, and education. SYF is focused on improving foundational literacy and numeracy (FLN), increasing access to books through community libraries and learning centers, enhancing mother and child health, promoting environmental sensitization, managing drinking water resources, advancing girls' education, and empowering women. SYF delivers knowledge to farmers for the cultivation of healthy, nutritious, and high-yield agricultural products through its core experts' group. Additionally, it promotes self-help groups (SHGs) to adopt traditional and innovative trades for income generation.
          </p>
        </div>
        
        <div className="lg:w-1/2 px-4">
          <img src="/logoicon.png" alt="Our logo" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
