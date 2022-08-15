// console.log("Welcome To Spotify Clone");

//Intialize the Variables
let songIndex = 0;
let audioElement = new Audio("lmly.mpeg");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
    {songname:"Let Me Love You", filePath:"lmly.mpeg", coverPath:"lmly.jpg"},
    {songname:"Sugar And Brownies", filePath:"sab.mpeg", coverPath:"lmly.jpg"},
    {songname:"Closer", filePath:"closer.mpeg", coverPath:"lmly.jpg"},
    {songname:"See You Again", filePath:"sya.mpeg", coverPath:"lmly.jpg"},
    {songname:"Hey Mama", filePath:"hm.mpeg", coverPath:"lmly.jpg"},
    {songname:"Cheap Thrills", filePath:"ct.mpeg", coverPath:"lmly.jpg"},
    {songname:"Dont Let Me Down", filePath:"dlmd.mpeg", coverPath:"lmly.jpg"},
    {songname:"Believer", filePath:"believer.mpeg", coverPath:"lmly.jpg"},
];


// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle")
    }
    
})

//Listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    // console.log("Timeupdate");
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlay = (e)=>{

    e.target.classList.remove("fa-pause-circle")
    e.target.classList.add("fa-play-circle")
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{

})
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener("click",(e)=>{
        // makeAllPlay();
        // console.log(e.target);
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src =`${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    })
})
document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})
document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})