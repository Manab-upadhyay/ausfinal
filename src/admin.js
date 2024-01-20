
import Navbar from "./components/navbar";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
 function Custombutton (){
    return (
        
        <Link to="/form" className="d-grid gap-2 my-52">
        <Button variant="primary" size="lg" className="bg-blue-600 text-black">
          Add Alumni Details
        </Button>
      </Link>
      );
}

 export default function Admin(){
    return  (
        <>

        <Navbar/>
        <Custombutton/>
</>
    )
   


}