let homeEl = document.getElementById('home');
let guestEl = document.getElementById('guest');
let counth = 0;
let countg = 0;

function plusOneh(){
    counth+=1
    homeEl.textContent = counth;
}

function plusTwoh(){
    counth+=2
    homeEl.textContent = counth;
}

function plusThreeh(){
    counth+=3
    homeEl.textContent = counth;
}

function plusOneg(){
    countg+=1
    guestEl.textContent = countg;
}

function plusTwog(){
    countg+=2
    guestEl.textContent = countg;
}

function plusThreeg(){
    countg+=3
    guestEl.textContent = countg;
}

function reset(){
    countg = 0;
    counth = 0;
    guestEl.textContent = countg;
    homeEl.textContent = counth; 
}


