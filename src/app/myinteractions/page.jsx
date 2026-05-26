import React from 'react'

const myInteractionsPage = () => {
  return (
    <div className="bg-[#0F172A] overflow-hidden relative h-[91vh] ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
      <h1 className="text-3xl font-bold text-center text-white py-8">
        Your Interactions
      </h1>

      <div className="flex flex-col items-center gap-4 w-10/12 mx-auto">
        <div className="card bg-white/10 backdrop-blur-lg  w-full shadow-lg">
          <div>
            <h1 className="text-xl font-bold text-center text-white py-4">
              You Commented:
            </h1>
          </div>
          
        </div>
        <div className="card bg-white/10 backdrop-blur-lg  w-full shadow-lg">
          <div>
            <h1 className="text-xl font-bold text-center text-white py-4">
              You liked:
            </h1>
          </div>
          
        </div>
        <div className="card bg-white/10 backdrop-blur-lg  w-full shadow-lg">
          <div>
            <h1 className="text-xl font-bold text-center text-white py-4">
              You posted:
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default myInteractionsPage