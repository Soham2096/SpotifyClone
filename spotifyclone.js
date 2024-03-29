// console.log("Welcome To Spotify Clone");

//Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tera Fitoor-[Genius] ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Shayad-[Love Aaj kal]", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Hamari Adhuri Kahani-[Unknown] ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tu hi yaar mera-[Unknown]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ae Dil hai Mushkil-[Unknown]", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Qaafirana-[Kedarnath]", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Kalank-[Kalnak]", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Khairiyat-[chhichore]", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jaan Nisar-[Kedarnath]", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Chal Ghar Chalein-[Malang]", filePath: "songs/4.mp3", coverPath:"covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        //new added 
        // if(document.getElementsByClassName(songItemPlay).addEventListener('click',()=>{
        //     e.target.classList.remove('fa-play-circle');
        //     e.target.classList.add('fa-pause-circle');
        // }))else{
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        // }
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// let songIndex = 0;
// let audioElement = new Audio("lmly.mpeg");
// let masterPlay = document.getElementById("masterPlay");
// let myProgressBar = document.getElementById("myProgressBar");

// let songs = [
//     {songname:"Let Me Love You", filePath:"lmly.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Sugar And Brownies", filePath:"sab.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Closer", filePath:"closer.mpeg", coverPath:"lmly.jpg"},
//     {songname:"See You Again", filePath:"sya.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Hey Mama", filePath:"hm.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Cheap Thrills", filePath:"ct.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Dont Let Me Down", filePath:"dlmd.mpeg", coverPath:"lmly.jpg"},
//     {songname:"Believer", filePath:"believer.mpeg", coverPath:"lmly.jpg"},
// ];


// // audioElement.play();

// //Handle play/pause click
// masterPlay.addEventListener("click", ()=>{
//     if(audioElement.pause || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove("fa-pause-circle");
//         masterPlay.classList.add("fa-play-circle")
//     }
    
// })

// //Listen to Events
// audioElement.addEventListener("timeupdate", ()=>{
//     // console.log("Timeupdate");
//     //Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
//     // console.log(progress);
//     myProgressBar.value = progress;
// })
// myProgressBar.addEventListener("change", ()=>{
//     audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
// })
// const makeAllPlay = (e)=>{

//     e.target.classList.remove("fa-pause-circle")
//     e.target.classList.add("fa-play-circle")
//     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{

// })
// }
// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
//     element.addEventListener("click",(e)=>{
//         // makeAllPlay();
//         // console.log(e.target);
//         songIndex = parseInt(e.target.id)
//         e.target.classList.remove("fa-play-circle")
//         e.target.classList.add("fa-pause-circle")
//         audioElement.src =`${songIndex+1}.mpeg`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");

//     })
// })
// document.getElementById("next").addEventListener("click", ()=>{
//     if(songIndex>9){
//         songIndex = 0;
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src =`${songIndex+1}.mpeg`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");

// })
// document.getElementById("previous").addEventListener("click", ()=>{
//     if(songIndex<=0){
//         songIndex = 0;
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src =`${songIndex+1}.mpeg`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circle");

// })