import React from 'react';
import coverImage from '../../assets/cover/Hansen-49.jpg';

function About() {
  return (
    <section>
      <div className='center'>
        <h1 id="about">About Me</h1>
      </div>
      <div className='center'>
        <img src={coverImage} className="photo" alt='cover' />
      </div>
      <div className="my-2">
        <p>
          My name is Mack Hansen and this is my portfolio. You will find my contact information and projects here.
          Thank you for visiting.   I am a Journeyman HVAC service technician certified with the RMGA (gas)
          and EPA (refrigerant). I am now transforming into a developer. Technology and computers has always been
          a deep interest to me which is why I am making a career change. I strive to always gain more knowledge
          and love overcoming obstacles.  I have a beautiful wife with 4 kids, 2 hairless cats, and a
          rottweiler. My hobbies are hanging out with my family, movies, going on adventures, and playing video
          games with my wife and kids.
        </p>
      </div>
    </section>
  );
}

export default About;