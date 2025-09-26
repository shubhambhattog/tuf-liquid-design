import React from 'react'

const page = () => {
  return (
    <div>
      {/* card div */}
      <div className="glass-card w-[372px] h-[350px] rounded-[24px] border text-white flex flex-col mx-auto">
          <div className="w-[300px] h-[281px] flex flex-col mx-auto mt-8">

            <div className='text-3xl font-bold mb-8 mt-4 mx-auto'>
              Login
            </div>

            <div>
              <div className='flex flex-col gap-4'>

                <input
                  type="text"
                  className="glass-card w-[300px] h-[49px] rounded-[10px] border-[0.5] px-4 outline-none"
                  placeholder="Username"
                />

                <input
                  type="password"
                  className="glass-card w-[300px] h-[49px] rounded-[10px] border-[0.5] px-4 outline-none "
                  placeholder="Password"
                />

              </div>


              <button className='glass-card w-[200px] h-[52px] rounded-[20px] border text-white mx-auto mt-8 text-lg font-semibold flex items-center justify-center'
                style={{ background: '#EA763F33' }} 
              >
                Submit
              </button>


            </div>



          </div>
      </div>
    </div>
  )
}

export default page
