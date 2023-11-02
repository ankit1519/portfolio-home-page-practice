import React from 'react'
import ankit from '../img/ankit.png'
import './Home.css'
function Home() {
  return (
    <div className="container">
  <div className="intro">
    <h1 className="naam">Ankit Raj</h1>

    <p className="">
      Hi, I'm Ankit Raj, a final-year undergrad specializing in front-end development. Proficient in JavaScript, React, CSS, Tailwind CSS,
       and TypeScript, I'm passionate about crafting user-friendly web solutions. Let's work together to create visually stunning, 
       high-performance websites. Explore my work, and feel free to reach out to discuss turning your digital concepts into reality.
    </p>

  </div>

  
    <img src={ankit} alt="" className="raj" />
  
</div>
  )
}

export default Home