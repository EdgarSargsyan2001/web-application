import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){



    return(
        <div className="Navbar">
            
            <Link to="/">Home</Link>
            <Link to="/ViewPage"> View</Link>
            <Link to="/ManagingPage"> Managing</Link>
            
            
        </div>
    )
}

export default Navbar