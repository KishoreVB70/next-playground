import React from 'react'
export const metadata = {title: "about kishore"};

const About = async() => {
  const _data = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await _data.json();
  console.log(data);
  return (
    <div className='h-[80vh] flex justify-center items-center' >
    </div>
  )
}

export default About