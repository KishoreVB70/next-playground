"use client";
const Blog = () => {
  // const botError = () => {
  //   console.log("fuck next");
  //   throw new Error("fuck next");
  // }

  const getRandom = () => {
    return Math.floor(Math.random() * 2);
  }

  const randomValue = getRandom();

  // if(randomValue === 1) {
  //   throw new Error("Value is 1 brotha")
  // }

  return (
      <div className='flex justify-center' >
        Blog
        {/* <button onClick={botError} className="ease-in hover:-translate-y-1 hover:border-red-600 transition duration-300 hover:bg-white hover:text-black border border-white px-3 py-1 text-white" >Throw error</button> */}
      </div>

  )
}

export default Blog