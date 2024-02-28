import React from 'react'
import MembersGrid from './MembersGrid';

function Team() {
    const members = [
        { name: "Shubham Badhani", position: "President", image: "https://picsum.photos/200" },
        { name: "Himanshu Kapkoti", position: "Vice President", image: "https://picsum.photos/200" },
        { name: "Chandra Prakash", position: "Secretary", image: "https://picsum.photos/200" },
        { name: "Deepak Badhani", position: "Member", image: "https://picsum.photos/200" },
        { name: "Yogesh Sanwal", position: "Member", image: "https://picsum.photos/200" },
        { name: "Shubham Pandey", position: "Member", image: "https://picsum.photos/200" },
        { name: "Rajat Badhani", position: "Member", image: "https://picsum.photos/200" },
        // Add more members as needed
      ];
  return (
    <div className="container mx-auto px-4 bg-gray-50" id="team">
      <h1 className="text-2xl font-bold my-4 text-center text-blue-700 p-5">Our Team</h1>
      <MembersGrid members={members} />
    </div>
  )
}

export default Team