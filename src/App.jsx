import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Sanjana Prabhakar');

  return (
    <div>
      <header role="banner">
        <h1>{name}</h1>
        <p id="contactInfo">sanjana.prabhakar09@gmail.com</p>
      </header>
      <main role="main">
        <section id="portfolio">
          <h2>About Me</h2>
          <p>Highly motivated individual with a MSc Health Psychology degree and a keen interest in applied technological innovation, fortified by independent initiatives developing and deploying Artificial Intelligence and Machine Learning solutions for diverse uses.</p>
          <ul className="profile-links" aria-label="Profile links">
            <li>
              <a href="https://www.cochrane.org/search/all/sanjana%20prabhakar" target="_blank" tabindex="0">
                <img src="https://www.cochrane.org/sites/default/files/public/uploads/join/badge_member.png" alt="Cochrane" />
              </a>
            </li>
            <li>
              <a href="https://orcid.org/0000-0003-4840-7371" target="_blank" tabindex="0">
                <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID" />
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/S-Prabhakar" target="_blank" tabindex="0">
                <img src="https://theme.zdassets.com/theme_assets/11199769/02b935144b9a19c226cc526d6a8c452493d2bca1.png" alt="ResearchGate" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sanjana-sp" target="_blank" tabindex="0">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.canva.com/design/DAGFtZn32A8/Q746clk3DSci-xuC-F-39w/view?utm_content=DAGFtZn32A8&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" tabindex="0">
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099107.png" alt="CV" />
              </a>
            </li>
          </ul>
        </section>
        <section id="chatbot">
          <h2>Meet My Chatbot</h2>
          <p>Feel free to ask any questions about my qualifications, experience, or skills. The chatbot is here to provide instant responses.</p>
          <form id="chatbot-form">
            <input type="text" id="question" name="question" placeholder="Ask me a question..." />
            <button type="submit">Ask</button>
          </form>
          <div id="response-container">Enter a question and click 'Ask'</div>
          <div className="questions-container mt-3">
            <p className="ask-me">Example Questions</p>
            <ul className="list-style">
              <li>Why should I hire Sanjana over other candidates for a [NAME OF ROLE] position?</li>
              <li>What is Sanjana's experience with [SPECIFIC SKILL]?</li>
            </ul>
          </div>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>I offer a wide range of React-related services, including:</p>
          <ul>
            <li>Custom React component development</li>
            <li>State management with Redux or Context API</li>
            <li>Testing with Jest and React Testing Library</li>
            <li>Performance optimization and code splitting</li>
            <li>Integration with RESTful APIs and GraphQL</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Get in Touch</h2>
          <p>Reach out to discuss how I can contribute</p>
          <ul>
            <li><a href="mailto:sanjana.prabhakar09@gmail.com" target="_blank" tabindex="0">sanjana.prabhakar09@gmail.com</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
