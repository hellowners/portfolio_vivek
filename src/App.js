import React from 'react';
import './styles.css';
import Home from './components/Home'

function App() {
    return (
        <div className="container">
            <Header />
            <Section title="Education">
                <p><strong>Bachelor of Engineering in Electronics and Computer Science</strong><br />
                Fr. Conceicao Rodrigues College Of Engineering, Mumbai (2022-2026)<br />
                Current CGPA: 9.42/10</p>

                <p><strong>Central Board of Secondary Education</strong><br />
                Apeejay School Mumbai (2008 - 2022)<br />
                Higher Secondary School Certificate - 88%<br />
                Secondary School Certificate - 92%</p>
            </Section>

            <Section title="Experience">
                <p><strong>Prompt Engineering Intern | Eduvance</strong> <em>(May 2024 - July 2024)</em><br />
                Developed and optimized AI-generated content prompts to enhance accuracy and relevance.</p>
            </Section>

            <Section title="Projects">
                <p><strong>Marine Debris Detector</strong><br />
                A software application utilizing machine learning to detect and classify marine debris from satellite imagery.</p>

                <p><strong>Image Encryption and Decryption in the Spatial Domain</strong><br />
                An image encryption system using chaos mapping and DNA encoding as a second-year team project.</p>
            </Section>

            <Section title="Technical Skills">
                <p>C, HTML, CSS, JavaScript, Python, Java, MySQL, PostgreSQL, MATLAB</p>
            </Section>

            <Section title="Courses">
                <p>Image Processing with MATLAB, Full-Stack Web Development, Prompt Engineering</p>
            </Section>

            <Section title="Academic Achievements">
                <ul>
                    <li>1st rank in Semester 1 - CGPA: 9.39/10</li>
                    <li>2nd rank in Semester 3 - CGPA: 9.42/10</li>
                    <li>1st rank in Semester 4 - CGPA: 10/10</li>
                </ul>
            </Section>
            <Home/> 
        </div>
    );
}

const Header = () => (
    <header className="header">
        <h1 className="fade-in">Vivek Kumar</h1>
        <p className="fade-in-delay">yolovivek2004@gmail.com | 93724677011</p>
        <p className="fade-in-delay">LinkedIn: www.linkedin.com/in/vivek-kumar-981662291</p>
    </header>
);

const Section = ({ title, children }) => (
    <section className="section fade-in">
        <h2>{title}</h2>
        {children}
    </section>
);

export default App;
