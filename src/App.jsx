import About from './Components/About/About';
import ContactUs from './Components/ContactUs';
import Education from './Components/Education';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import SkillsSection from './Components/SkillsSection/SkillsSection';
function App() {
  
  return ( 
  
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-700 to-slate-600 text-white">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <SkillsSection></SkillsSection>
    <Projects></Projects>
    <Education></Education>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
      
      
      
    
  )
}

export default App
