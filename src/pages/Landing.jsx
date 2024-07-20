import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import MentorLayout from "../components/Layouts/MentorLayout"
import AboutLayout from "../components/Layouts/AboutLayout"

const Landing = () => {
    return (
        <>
      <div className=" bg-[url('bg.jpg')]">
        <Navbar />
        <Hero />
        <AboutLayout />
        <MentorLayout/>
        </div> 
        </>
    )
}

export default Landing;