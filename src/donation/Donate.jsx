import React from 'react'

function Donate() {
  return (
    <div className="w-screen lg:h-screen text-center bg-gray-50" id='donate'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        <div className="lg:w-1/2 px-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-blue-700">Donate Us</h2>
          <p className="text-lg md:text-lg lg:text-lg font-serif">
          Join us at Sankalp Youth Foundation in our commitment to transforming underserved communities. 
          With a focus on healthcare, education, and livelihood opportunities, we strive to bridge the gap where government services fall short. 
          Our Ghoda Library initiative, nestled in the Himalayan mountains, champions literacy and education in remote areas, embodying our dedication to holistic community development. 
          Your donation fuels these efforts, driving sustainable change and empowering individuals to build brighter futures. Together, we can break barriers, inspire progress, and make a tangible difference in the lives of those who need it most. 
          Join our cause and be a catalyst for positive change today!
          </p>
        </div>
        
        <div className="lg:w-1/3 px-4 lg:mt-20 lg:ml-20">
          <img src="https://res.cloudinary.com/dvfarxhig/image/upload/v1710263936/donateQRNoBG_hsvilu.svg" alt="Payment QR code" className="mx-auto" />
            <div className="flex justify-center">
              <div className="flex flex-row" style={{width:150,height:80}}>
                <img src="https://res.cloudinary.com/dvfarxhig/image/upload/v1710264896/paytm-icon_vx3uex.svg" alt="Paytm icon" className='mr-3' />
                <img src="https://res.cloudinary.com/dvfarxhig/image/upload/v1710264896/phonepe-logo-icon_ye10f8.svg" alt="PhonePe logo" className='mr-3' />
                <img src="https://res.cloudinary.com/dvfarxhig/image/upload/v1710264892/google-pay-icon_tdkugx.svg" alt="Google Pay icon" className='mr-3' />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Donate