import './Toggle.css'

function changeBioColors(color) {
  var card = document.getElementsByClassName('profile-card');
  
  // card.style.background= "#0e0e0"
}

function nightmode(){
  var nightmodeswitch = document.getElementById('dn');
  var header = document.getElementById('header');
  var loading = document.getElementById('loading-bullets');
  var color; 

  if (nightmodeswitch.checked){
    color = '#17202e';  
    loading.style.fill = 'white';

    header.style.color = '#fff';
    header.style.textShadow = '0.05em 0.05em #7d0081';
  }else{
    color = 'white'
    loading.style.fill = '#17202e';

    header.style.color = '#000';
    header.style.textShadow = '0.05em 0.05em #9d91b3';
  }
  changeBioColors(color);

  document.body.style.background = color;
}

function Toggle () {
    return (
    <div class="toggleWrapper">
    <input type="checkbox" class="dn" id="dn" onChange={nightmode}/>
    <label for="dn" class="toggle">
        <span class="toggle__handler">
        <span class="crater crater--1"></span>
        <span class="crater crater--2"></span>
        <span class="crater crater--3"></span>
        </span>
        <span class="star star--1"></span>
        <span class="star star--2"></span>
        <span class="star star--3"></span>
        <span class="star star--4"></span>
        <span class="star star--5"></span>
        <span class="star star--6"></span>
    </label>
    </div>
    );
  }
  
export default Toggle;