import React from 'react'
export const metadata = {title: "about kishore"};

const About = async() => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const _data = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await _data.json();
  console.log(data);
  return (
    <div className='h-[80vh] flex justify-center items-center' >
      Data received {data && data[0].name}
    </div>
  )
}

export default About