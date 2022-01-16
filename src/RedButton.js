import './RedButton.css'
import profile from './images/profile.png'

const delay = ms => new Promise(res => setTimeout(res, ms));

const showResponseMessage = async () => {

  const element = document.getElementById("response-message");	// Get element
  const loading = document.getElementById("loader-container");

  loading.style.opacity = "0.5";
  await delay(2000);
  element.style.opacity = "1";	
  await delay(1000);
  element.style.opacity = "0";
  loading.style.opacity = "0";
  showResume();
};

export const showResume = () => {
  window.open('pdfs/CV - Erez Hasson.pdf', '_blank');
} 

function RedButton () {
  return (
    <div class="center">
      <div id="header" className="header">Resume Push Button 📃</div>

    <div className="phone-container">
      
      <div class="profile-card">

        <header>

          <a href="https://portfolio-erezhasson.web.app/">
            <img src={profile} />
          </a>
          <h1>Erez Hasson</h1>
          <h2>Software Programmer & Web Developer</h2>
        </header>

      <ul class="profile-social-links">

        <li>
            <a href="https://www.facebook.com/erez.hasson.1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/feed/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/erezhasson">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </li>
      </ul>

      <div class="select-button" onClick={showResponseMessage}></div>
      <div id="loader-container">
            <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 5.3">
              <g id="loading-bullets">
                <circle class="loading-circle-1" cx="3.3" cy="2.7" r="1"/>
                <circle class="loading-circle-2" cx="9.8" cy="2.7" r="1"/>
                <circle class="loading-circle-3" cx="16.5" cy="2.7" r="1"/>
              </g>
            </svg>
       </div>
      </div>
    </div>
    
    <div id="response-message">Thank you for pressing the button :)</div>
    </div>
  );
}

export default RedButton;