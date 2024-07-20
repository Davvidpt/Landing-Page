import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      sosmed :'https://www.instagram.com/dvid.prstio_/?igsh=MWN2OHV1NDFiYXJqbQ%3D%3D'
    },
    {
        name: 'Tsukishima',
        role: 'Developer',
        imageUrl: 'tsukishima.jpg',
        sosmed : 'https://www.instagram.com/'
      },
      {
        name: 'Dimas',
        role: 'IT Support',
        imageUrl: 'china.jpg',
        sosmed : 'https://www.instagram.com/'
      },
      {
        name: 'Falih Ihsan Anshari',
        role: 'Backend Developer',
        imageUrl:'hero.jpg',
        sosmed : 'https://www.instagram.com/'
      },
      {
        name: 'Naruto',
        role: 'UI/UX',
        imageUrl:'naruto.jpg',
        sosmed : 'https://www.instagram.com/'
      },
      {
        name: 'Dafid Prastio',
        role: 'Juragan LELE',
        imageUrl:'sonic.jpg',
        sosmed : 'https://www.instagram.com/'
      },
      
]
  

const MentorLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  // Animation variants for the sliding effect
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Meet Our Mentor</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam a rem omnis quasi et aperiam blanditiis.
          </p>
        </div>
        <ul role="list" className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center text-center">
              <div className="flex-shrink-0">
                <img alt="" src={person.imageUrl} className="mx-auto h-24 w-24 rounded-full shadow-md" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                <p className="mt-1 text-sm text-indigo-600">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default MentorLayout;
