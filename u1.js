const music = new Audio('lastsong.mp3');

// create Array 
//All Array Object change
const songs = [
    {
        id:'1',
        songName:` Kanpesum varthai<br>
        <div class="subtitle"> U1 </div>`,
        poster: "img/u1/1.jpeg"
    },
    {
        id:'2',
        songName:` Kadhal aasai<br>
        <div class="subtitle"> U1</div>`,
        poster: "img/u1/2.jpeg"
    },
    // all object type 
    {
        id:"3",
        songName: ` Oru kanjaadai<br><div class="subtitle"> U1 </div>`,
        poster: "img/u1/3.jpeg",
    },
    {
        id:"4",
        songName: ` Yar indha pendhan <br><div class="subtitle">U1</div>`,
        poster: "img/u1/4.jpeg",
    },
    {
        id:"5",
        songName: ` Yaaro yarukul<br><div class="subtitle"> U1</div>`,
        poster: "img/u1/5.jpeg",
    },
    {
        id:"6",
        songName: ` Kadhal vaithu <br><div class="subtitle"> U1</div>`,
        poster: "img/u1/6.jpeg",
    },
    {
        id:"7",
        songName: ` Kannan varum velai<br><div class="subtitle"> U1</div>`,
        poster: "img/u1/7.jpeg",
    },
    {
        id:"8",
        songName: ` Suda suda thooral <br><div class="subtitle"> U1</div>`,
        poster: "img/u1/8.jpeg",
    },
    {
        id:"9",
        songName: ` Pacha elai <br><div class="subtitle"> U1</div>`,
        poster: "img/u1/9.jpeg",
    },
    {
        id:"10",
        songName: ` Saachitale <br><div class="subtitle"> U1</div>`,
        poster: "img/u1/10.jpeg",
    },

    
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/u1/${index}.mp3`;
        download_music.href ='audio/u1/${index}.mp3';
        poster_master_play.src =`img/u1/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    wave.classList.remove('active2');
    index++;
    music.scr ='audio/u1/${index}.mp3';
    download_music.href ='audio/u1/${index}.mp3';
    poster_master_play.scr = 'img/u1/${index}.jpg';
    music.play();
    let song_title = songs.filter((ele)=> {
        return ele.id ==index;
    })
    song_title.forEach(ele => {
        let { songName } =ele;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    })

makeAllBackgrounds();
Array.from(document.getElementsByClassName('songitem'))['${index-1}'].style.background= "rgb(105, 105, 170, .1)";
makeAllPlays();
document.getElementsByClassName('playlistplay')[index - 1].classList.remove('bi-play-circle-fill');
document.getElementsByClassName('playlistplay')[index - 1].classList.remove('bi-pause-circle-fill');
})




let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/u1/${index}.mp3`;
    poster_master_play.src =`img/u1/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/u1/${index}.mp3`;
    download_music.href ='audio/u1/${index}.mp3';
    poster_master_play.src =`img/u1/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];


left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})