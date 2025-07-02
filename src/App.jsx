import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Riddhi Shardul Prabhudesai"
          studentPhotoUrl="\Images\IMG_20241109_154945.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
          <div className="main-layout">
            <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
             <Route path="/courses" element={<CoursesPage/>} />
            <Route path="/notfound" element={<NotFoundPage/>} />
            <Route path="/admission" element={<AdmissionPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
          <ChatbotComponent/>
          <Footer/>
          </div>
          </div>
        </Router>    
      </>
    )
}

export default App;