import './RedButton.css'

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
      <div className="header">Resume Push Button 📃</div>
    <div id="loader-container">
    <div id="loader-dummy">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 5.3">
        <g id="loading-bullets">
          <circle class="loading-circle-1" cx="3.3" cy="2.7" r="1"/>
          <circle class="loading-circle-2" cx="9.8" cy="2.7" r="1"/>
          <circle class="loading-circle-3" cx="16.5" cy="2.7" r="1"/>
        </g>
      </svg>
    </div>
    </div>
    <div className="button-container">
    <image/>
    <div class="select-button" onClick={showResponseMessage}>Press</div>
    </div>
    <div id="response-message">Thank you for pressing the button :)</div>
    </div>
  );
}

export default RedButton;