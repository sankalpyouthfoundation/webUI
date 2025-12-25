import React from 'react';
// import PanchayatLibrary from './PanchayatLibrary';
import GhodaLibrary from './GhodaLibrary';
import '../App.css';

const OurInitiative = () => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800 py-8 md:py-12" id="initiative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Our Initiative
          </h2>
          <div className="w-full">
            <GhodaLibrary/>
            {/* <PanchayatLibrary/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInitiative;
