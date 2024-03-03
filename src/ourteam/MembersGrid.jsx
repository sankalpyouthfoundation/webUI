import React from "react";

const MemberCard = ({ member }) => {
  return (
    // <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 lg:h-50 object-cover object-center"
          src={member.image}
          alt={member.name}
        />
        <div className="p-4 text-center">
          <p className="text-blue-700 font-semibold">{member.name}</p>
          <p className="text-gray-600">{member.position}</p>
        </div>
      </div>
    </div>
  );
};

const MembersGrid = ({ members }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default MembersGrid;
