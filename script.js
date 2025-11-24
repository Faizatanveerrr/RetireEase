
let winter=document.getElementById("winter");
let summer=document.getElementById("summer");
let rainfall=document.getElementById("rainfall");
let pause_btn=document.querySelector(".pause");
let play_btn=document.querySelector(".play");
let audio=new Audio("07_nature_sounds_nature_music_mo.mp3");
let timeDisplay = document.getElementById("timeDisplay");
let circle = document.getElementById("progressCircle");
let timer_btn = document.querySelectorAll(".timer-btn");
let timer;

let totalTime = 120; 
let currentTime = totalTime;
let timerInterval;
let isRunning = false;

function updateTimeDisplay() { 
    let min = Math.floor(currentTime / 60); 
    let sec = currentTime % 60; 
    timeDisplay.innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
 };

function medit(){
    if(currentTime <= 0){
        isRunning = true;
    }
    if (!isRunning) {
        // Start
        isRunning = true;
        audio.play();
        play_btn.innerHTML = `<img src="13pause.png" alt="Pause">`;

        timerInterval = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateTimeDisplay();
               
            } else {
                audio.pause();
                play_btn.innerHTML = `<img src="12play-button.png" alt="Play">`;
                clearInterval(timerInterval);
                isRunning = false;
            }
        }, 1000);
    } else {
        // Pause
        isRunning = false;
        audio.pause();
        play_btn.innerHTML = `<img src="12play-button.png" alt="Play">`;
        clearInterval(timerInterval);
    }
}


timer_btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
       
        clearInterval(timerInterval);
        audio.pause();
        audio.currentTime=0;
        isRunning = false;
        play_btn.innerHTML = `<img src="12play-button.png" alt="Play">`;

        
        totalTime = parseInt(e.target.id) * 60;
        currentTime = totalTime;

       
        let min = parseInt(e.target.id);
        timeDisplay.innerText = `${String(min).padStart(2, '0')}:00`;
        medit();
    });
});



play_btn.addEventListener("click", () => {
    
medit();
    
});

let bgVideo = document.getElementById("bgVideo");
let header = document.querySelector(".header");

winter.addEventListener("click", () => {
    header.style.color= "#E8D9B9";
    bgVideo.src = "143197-781982739.mp4";
});

summer.addEventListener("click", () => {
    header.style.color= "#00349dff";
    bgVideo.src = "137025-765458093.mp4";
});

rainfall.addEventListener("click", () => {
    header.style.color= "#021538ff";
    bgVideo.src = "87476-601149398.mp4";
});


// for opacity 

let elements=document.querySelectorAll(".header , .main-content");
let resetTimer;

function showUI(){

    elements.forEach((elem)=>{
            elem.style.opacity=1;
            elem.style.pointerEvents="auto";
    });
}

function hideUI(){

    elements.forEach((elem)=>{
            elem.style.opacity=0;
            elem.style.pointerEvents="none";
    })
}

resetTimer=()=>{
    showUI();
    clearTimeout(timer);
    timer=setTimeout(hideUI,8000);
}


document.addEventListener("mousemove",resetTimer);
document.addEventListener("click",resetTimer);
document.addEventListener("touchstart",resetTimer);




