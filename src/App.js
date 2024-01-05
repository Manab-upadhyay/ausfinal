
import "./index.css"
import Navbar from "./navbar";
import Heading from "./heading";
import Footer from "./footer";
import mail from "./email.png"
import facebook from "./facebook.png"
 import twitter from "./twitter.png"
 import logo from "./Assam_University_Logo.png"

function App() {
  return (
    <>
    <div className="bg-blue-900 flex justify-between items-end">
  <div className="flex justify-start item-start">
    <img src={mail} className="w-8 cursor-pointer hover:to-white mb-2"/>
    <img src={facebook} className="w-6 h-6  mt-1 mx-4 cursor-pointer"/>
    <img src={twitter} className="w-6 h-6  mt-1 cursor-pointer border rounded-lg"/>
  </div>
<img src={logo} className="w-10 ml-auto"/>
  <h1 className="text-white text-xl mx-2 font-serif">A Central University Established by an Act of Parliament</h1>
</div>

  
  <Navbar/>
  <Heading/>
  <Footer/>
  
  
  </>
  
  );
}

export default App;
