import React from 'react';
// import PanchayatLibrary from './PanchayatLibrary';
import GhodaLibrary from './GhodaLibrary';
import '../App.css';

const OurInitiative = () => {
  return (
    <div className="container mx-auto text-center bg-gray-50 p-5" id="initiative">
      <h2 className="text-3xl md:text-3xl font-bold mb-4 text-blue-700">Our Initiative</h2>
      <GhodaLibrary/>
      {/* <PanchayatLibrary/> */}
    </div>
  );
};

export default OurInitiative;
