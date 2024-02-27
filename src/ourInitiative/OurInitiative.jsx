import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const OurInitiative = () => {
  return (
    <div className="container mx-auto text-center bg-gray-50" id="initiative">
      <h2 className="text-3xl md:text-3xl font-bold mb-4 text-blue-700">Our Initiative</h2>
      <div className="lg:flex lg:justify-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="ml-0 md:ml-10 md:mt-5 text-lg md:text-lg lg:text-lg font-serif">
            <b>Ghoda Library</b>, Instead of a traditional brick-and-mortar library, this initiative features mobile libraries carried by horses. A volunteer team, developed by Shubham, took specially trained horses that carry books and other educational resources in saddlebags to the remote villages of Nainital.
            The Ghoda Library initiative in the Himalayan mountains not only celebrates the literary heritage of the region but also promotes literacy and education in remote areas. Its unique and culturally significant approach to fostering learning and preserving traditions is likely to capture the imagination of the nation and gain widespread support.
            The Ghoda Library organizes literacy programs and reading sessions at various villages and schools in remote Himalayan regions, promoting reading and education, especially among children and marginalized communities.
            The Ghoda Library focuses on preserving and promoting the unique Himalayan culture, including traditional folklore and customs.
            The initiative has involved the local community in its operation, making it sustainable and ensuring it caters to the specific needs of the region.
          </p>
          <b className='text-blue-700'>Prime Minister Narendra Modi praised the Ghoda Library during the 105th edition of 'Man ki Baat,' which aired on September 24th, 2023.</b>
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex justify-center items-center">
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <TwitterTweetEmbed tweetId={'1705866549029200322'} options={{ width: 500, height: 500 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInitiative;
