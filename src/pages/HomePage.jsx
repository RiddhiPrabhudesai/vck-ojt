import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div className="main-layout" style={{width:"100vw"}}>
            <Header/>
            <div class="main-content">
            <div class="body-container">
                <div className="scrollbox">
                <div className="main-image">
                    <img src="\Images\college-banner.png"  alt="Vivekanand College Header Image" align="center"  class="image"/>
                <div class="main-image-section">
                    <h1 style={{textAlign:"center"}}>Welcome to Vivekanand College</h1>
                    <p>Your journey to excellence starts here!</p>
                    <button id="header-adm-btn" class="app-home-btn"><a href="/admission" class="apply-btn-color"><u>Apply now!</u></a></button>
                </div>
                </div>

            <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul type="bullet">
                <li><b>Legacy of Excellence: </b>Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty: </b>Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities: </b>Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development: </b>Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements: </b>Excellent career opportunities with leading companies.</li>          
           </ul>
        <h2>Campus Life and Facilities</h2>
        <hr/>
        <div class="home-img-btm">
        <img src="\Images\students-studying.jpeg" class="students-studying-img"/>
        <img src="\Images\campus-life.jpg" class="students-studying-img"/></div>
        <div class="home-bottom">
        <p style={{textAlign:"center"}}>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        <p style={{textAlign:"center"}}>Ready to explore our courses?</p>
         <button id="courses-btn" class="btn"><a href="/courses" class="btn">Explore Courses!</a></button>
        </div>
       </div>
       </div>
       </div>
       </div>
    )
}

export default HomePage;