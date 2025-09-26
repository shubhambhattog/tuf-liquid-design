import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>

      {/* outline */}
      <div className="glass-card text-white w-[1260px] h-[650px] opacity-100 rounded-[10px] border-[1px] border-[#333333] flex">

        {/* hero */}
        <div
          className="w-[1116px] h-[410px] opacity-100 relative top-[120px] left-[72px] gap-[48px] flex items-center justify-center"
          style={{ transform: 'rotate(0deg)' }}
        >

          {/* hero left */}
          <div className="w-[420px] h-[339px] opacity-100 gap-8 relative flex flex-col">

            {/* text */}
            <div className=" w-[420px] h-[262px] opacity-100 gap-8">



              {/* tag */}
              <button className='glass-card w-[204] h-[31px] rounded-[20px] text-white text-[16px]  flex items-center justify-center py-4 px-2 top-0 left-0'
                style={{ background: '#EA763F1A' }} 
              >
                Crafted by Top Engineers
              </button>

              {/* hero heading */}
              <div
                className="w-[420px] h-[129px] opacity-100 font-[Lato]  text-[36px] leading-[100%] tracking-[0%] mt-[32px] mb-2"
              >
                <span className="text-[#EA763F] font-semibold">
                  ONE-STOP Platform!
                </span>
                <br />
                All Your Prep in One Place 
                <br />
                One Plan. Zero Stress
              </div>



              {/* hero sub-heading */}
              <div className="w-[420px] h-[38px] opacity-100 font-[Lato] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#A3A3A3] ">
                The most trusted platform for engineers to up-skill and crack tech interviews in the least time
              </div>














            </div>

            {/* btns */}
            <div className='flex gap-4 mt-8 absolute bottom-[7%] left-0'>

             <button
                className="glass-card w-[148px] h-[45px] opacity-100 rounded-[10px] gap-[10px] px-[14px] py-[13px] flex items-center justify-center  text-[#A3A3A3] font-[Lato] text-[16px] font-normal leading-[100%] tracking-[0%]"
              >
                Explore offerings
              </button>

              <button className='glass-card w-[147px] h-[45px]  rounded-[10px] border text-white text-lg flex items-center justify-center font-medium'
                style={{ background: '#FFFFFF1A' }} 
              >
                Buy Now
              </button>

            </div>

          </div>


          {/* hero-right, thumbnail and desc */}
          <div className='relative glass-card flex flex-col  w-[648px] h-[410px] rounded-[10px] mx-auto '>

            {/* yt video */}
            <div className=" w-[628px] h-[335px] rounded-[8px] opacity-100 relative">

             {/* Background blur - behind everything */}

             <Image
                src="/yt_thumbnail.png"
                alt="yt-icon"
                width={628}
                height={335}
                className="cursor-pointer rounded-[10px] relative top-[10px] left-[10px] opacity-100 z-[-1]"
              />

              <div className='absolute top-[55%] left-[50%] -translate-x-[30%] -translate-y-[40%] z-20'>
                  <div>
                    <Image src="/logos_youtube-icon.svg" alt="yt-icon" width={80} height={80} className='cursor-pointer'/>
                  </div>
                  <div style={{
                                boxShadow: '5px -30px 30px 40px rgba(255, 255, 255, 1)', // Added spread of 10px
                              }}/>
              </div>

              <button className=' absolute top-[-120px] left-[267px] glass-card w-[124px] h-[45px]  rounded-[10px] border text-black text-[16px] flex items-center justify-center font-medium'
                style={{ background: '#FF00001A' }} 
              >
                Watch Now
              </button>


            </div>

            {/* desc and share */}
            <div className="absolute flex justify-between items-center w-[628px] h-[24px] opacity-100 top-[375px] left-[10px]">

              <div className="w-[340px] h-[24px] opacity-100 font-[Lato] font-normal text-[20px] leading-[100%] tracking-[0%]">
                TUF+ Demo - One Stop Prep Platform!
              </div>


              <div className='glass-card w-[24px] h-[24px] rounded-[24px] border flex items-center justify-center'>
                <Image src="/mdi_share.svg" alt="yt-icon" width={16} height={16} className='cursor-pointer'/>
              </div>
            
            </div>
            
          </div>
        </div>




  
      </div>
      
    </div>
  )
}

export default page
