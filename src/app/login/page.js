import React from 'react'

const page = () => {
  return (
    <div>
      {/* card div */}
      <div className="glass-card w-[372px] h-[350px] rounded-[24px] border text-white flex flex-col mx-auto">
          <div className="glass-card w-[300px] h-[281px] flex flex-col mx-auto mt-8">

            <div className='text-3xl font-bold mb-8 mt-4 mx-auto'>
              Login
            </div>

            <div>
              <div>

                <input type="text" className='w-[300px] h-[40px] bg-transparent border-b border-white outline-none mb-8' placeholder='Enter Username' />

                <input type="password" className='w-[300px] h-[40px] bg-transparent border-b border-white outline-none mb-8' placeholder='Enter Password' />

              </div>
              </div>


              <div>
                Submit
              </div>

            </div>



          </div>
      </div>
      
    </div>
  )
}

export default page
