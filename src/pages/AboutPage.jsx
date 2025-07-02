import Header from "../components/Header/Header";

const AboutPage = () => {
    return(
            <div className="main-layout" style={{width:"100vw"}}>
            <Header/>
            <div className="main-content">
            <div classname="body-container" style={{background: "white",maxWidth: "950px",margin: "2rem auto",padding: "2rem",borderRadius:"8px",boxShadow: "0 0 10px rgba(0,0,0,0.1)",boxSizing:"border-box"}}>
            <h1 class="body-container-h1">About Vivekanand College</h1>
            <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
            <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
            <h2>Our Mission</h2><hr style={{color: "grey"}}/>
            <ul type="bullet">
                <li>To provide high-quality, accessible education across various disciplines.</li>
                <li>To foster research, innovation, and creativity among students and faculty.</li>
                <li>To cultivate a diverse and inclusive learning environment.</li>
                <li>To instill strong ethical values and leadership qualities.</li>
            </ul>
            <h2>Our Values</h2>
            <hr style={{color: "grey"}}/>
            <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
            <h2>Our History</h2>
            <hr style={{color: "grey"}}/>
            <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
        </div>
        </div>
        </div>
    )
}

export default AboutPage;