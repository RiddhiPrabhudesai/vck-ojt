import {Link} from 'react-router-dom'
import React,{useState} from 'react';
import './Header.css'
function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
       <div>
        <header class="header-container">
            
            <a href="/" data-discover="true" class="college-name">Vivekanand College</a>
            <nav class="navbar desktop-nav">
                <Link to="/home" class="nav-item">Home  </Link>
                <Link to="/about" class="nav-item">About </Link>
                <Link to="/courses" class="nav-item">Courses </Link>
                <Link to="/contact" class="nav-item">Contact </Link>
                {/* <Link to="/notfound" class="nav-item">NotFound </Link>
                <Link to="/admission" class="nav-item" >Admission</Link> */}
                <button id="apply-btn" class="nav-item-btn"><a href="/admission" class="nav-item-btn">Apply Now!</a></button>
            </nav>
            <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/about" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/courses" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admissions"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}    
        </header>
    </div>
    )
}

export default Header;