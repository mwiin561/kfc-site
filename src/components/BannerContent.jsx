import React from 'react'
import Chicken from '../assets/ChickenCart.png'
const BannerContent = () => {
  return (
    <>
   <div className='w-full -mt-[130%] md:-mt-[35%]  flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
      {/* Content */}
    <div className='flex flex-col justify-center md:items-start w-full px-2 ' >
<h1 className='text-5xl md:text-7xl md:w-[130%] md:text-start text-center py-3 w-[100%] xl font-bold text-white'>JAGONYA AYAM
BUCKET MENU
CAMPAIGN
</h1>
<p className='  py-3 text-white'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id ut velit convallis nec sit felis. Non non sagittis aenean enim tellus erat semper. Enim a eros urna aliquam, tempor, tortor.
</p>
<button className='border-[3px] mx-auto md:mx-0 my-5 text-white rounded-[30px] py-2 w-[50%] md:w-[40%] md:px-[30px]'>ORDER NOW</button>
</div>

      {/* END OF CONTENT */}
<div>
  <img src={Chicken} alt="chicken" />
</div>
    </div>
    
   </div>
    </>
  )
}

export default BannerContent
