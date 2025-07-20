import React from 'react';

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex flex-col lg:flex-row justify-center items-center bg-amber-900'>
      {/* Mobile View */}
      <div className='mobile-view h-full w-full flex flex-col justify-evenly items-center px-5 md:hidden'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-5xl font-bold'>Get in <br /> touch</h1>
          <div className='h-fit p-3 w-[70%] '>
          <p className='text-sm font-semibold mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quibusdam harum adipisci dolorem impedit odio.</p>
          </div>
          <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[90%] bg-[#F2D5C0] rounded-3xl p-5">
          <h1 className='font-bold text-2xl text-[#523122] text-center'>
            Don’t be shy. <br />Hit us up and we’ll get back to you!
          </h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Message" className='h-20 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-4xl border-none focus:bg-white focus:outline-none' />
            <button className='font-semibold text-lg h-10 w-full bg-[#E3A458] text-[#523122] text-center rounded-4xl border-none focus:outline-none'>Submit</button>
          </form>
        </div>
      </div>

      {/* Tablet View */}
      <div className='tablet-view hidden md:flex md:w-[100%] flex-col justify-center items-center px-5 lg:hidden'>
        <div className='text-center  flex flex-col items-center'>
          <h1 className='text-6xl font-bold'>Get in <br /> touch</h1>
          <div className='h-fit p-3 w-[60%]' >
          <p className='text-sm font-semibold mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quibusdam harum adipisci dolorem impedit odio.</p>
          </div>
          <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
        </div>
        <div className="loginPageFormContainer flex flex-col items-center mt-5 w-[70%] bg-[#F2D5C0] rounded-3xl p-5">
          <h1 className='font-bold text-2xl text-[#523122] text-center'>
            Don’t be shy. <br />Hit us up and we’ll get back to you!
          </h1>
          <form className='w-full flex flex-col mt-5'>
            <input type="text" placeholder="Enter your name" className='h-10 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Enter your email" className='h-10 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
            <input type="text" placeholder="Message" className='h-20 pl-5 mb-3 w-full bg-[#F8E4D5] rounded-4xl border-none focus:bg-white focus:outline-none' />
            <button className='font-semibold text-lg h-10 w-full bg-[#E3A458] text-[#523122] text-center rounded-4xl border-none focus:outline-none'>Submit</button>
          </form>
        </div>
      </div>

      {/* Desktop View */}
      <div className='desktop-view hidden lg:flex lg:w-[100%] lg:h-[100%]  gap-5  justify-center px-5'>
        <div className='loginPage1Part h-full flex flex-col gap-5 justify-center'>
          <div className='w-fit'>
            <h1 className='text-7xl font-bold'>Get in <br /> touch</h1>
          </div>
          <div className='w-[50%]'>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quibusdam harum adipisci dolorem impedit odio.</p>
          </div>
          <div>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis?</p>
          </div>
        </div>

        <div className='loginPage2Part h-full flex flex-col gap-5 justify-center w-[50%] items-center'>
          <div className="loginPageFormContainer flex flex-col items-center h-[90%] w-[90%] overflow-hidden rounded-3xl bg-[#F2D5C0]">
            <div className='text-center p-5'>
              <h1 className='font-bold text-3xl text-[#523122]'>
                Don’t be shy. <br />Hit us up and we’ll get back to you!
              </h1>
            </div>

            <div className='loginPage2Form w-full h-[80%]'>
              <form className='w-full h-full flex flex-col justify-center items-center'>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <input type="text" placeholder="Enter your name" className='h-15 pl-5 w-[40%] bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
                  <input type="text" placeholder="Enter your email" className='h-15 pl-5 w-[40%] bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <input type="text" placeholder="Enter your phone" className='h-15 pl-5 w-[40%] bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
                  <input type="text" placeholder="Enter your address" className='h-15 pl-5 w-[40%] bg-[#F8E4D5] rounded-full border-none focus:bg-white focus:outline-none' />
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <input type="text" placeholder="Message" className='h-30 text-left placeholder:text-left pl-5 w-[80%] bg-[#F8E4D5] rounded-4xl border-none focus:bg-white focus:outline-none' />
                </div>
                <div className='h-fit w-full flex items-center justify-center p-3 gap-4'>
                  <button className='font-semibold text-xl h-15 w-[30%] bg-[#E3A458] text-[#523122] text-center rounded-4xl border-none focus:outline-none'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
