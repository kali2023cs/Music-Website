<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Music App</title>
    <style>
         header .song_side::before{
     background: url('');
         }
    </style>
</head>

<body>
<header>
    <div class="menu_side">
        <h1>Playlist</h1>
        <div class="playlist">
            <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist</h4>
            <h4 ><span></span><i class="bi bi-music-note-beamed"></i> Last Listening</h4>
            <h4 ><span></span><i class="bi bi-music-note-beamed"></i> Recommended</h4>
        </div>
        <div class="menu_song">
            <li class="songItem">
                <span>01</span>
                <img src="img/1.jpg" alt="kali">
                <h5>
                    Ranjithame
                    <div class="subtitle">varisu</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
            </li>
            <li class="songItem">
                <span>02</span>
                <img src="img/1.jpg" alt="kali">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
            </li>
            <li class="songItem">
                <span>03</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
            </li>
            <li class="songItem">
                <span>04</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
            </li>
            <li class="songItem">
                <span>05</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
            </li>
            <li class="songItem">
                <span>06</span>
                <img src="img/1.jpg" alt="Alan">
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
            </li>
        </div>
    </div>


    <div class="song_side">
        <nav>
            <ul>
               <a href="/"> <li>Discover</li>
            </a>
                <li>MY LIBRARY</li>
                <li>RADIO</li>
            </ul>
            <div class="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search Music...">
            </div>
           
        </nav>
        <div class="content">
            <h1>MY FAVOURITE </h1>
           
            <div class="buttons">
                <button>SUBSCRIBE</button>
                <button>FOLLOW</button>
            </div>
        </div>
        <div class="popular_song">
            <div class="h4">
                <h4>Popular Song</h4>
                <div class="btn_s">
                    <i id="left_scroll" class="bi bi-arrow-left-short"></i>
                    <i id="right_scroll" class="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div class="pop_song">
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                        <!-- change All id  -->
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src="img/1.jpg" alt="alan">
                        <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </div>
                    <h5>On My Way
                        <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                
            </div>
        </div>
       

    <div class="master_play">
        <div class="wave">
            <div class="wave1"></div>
            <div class="wave1"></div>
            <div class="wave1"></div>
        </div>
        <img src="img/last.jpg" alt="kali" id="poster_master_play">
        <h5 id="title">Tum Tum<br>
            <div class="subtitle">enemy</div>
        </h5>
        <div class="icon">
            <i class="bi bi-skip-start-fill" id="back"></i>
            <i class="bi bi-play-fill" id="masterPlay"></i>
            <i class="bi bi-skip-end-fill" id="next"></i>
            <i class="bi bi-cloud-arrow-down-fill" id="download_music" ></i>
        </div>
        <span id="currentStart">0:00</span>
        <div class="bar">
            <input type="range" id="seek" min="0" value="100" max="100">
            <div class="bar2" id="bar2"></div>
            <div class="dot"></div>
        </div>
        <span id="currentEnd">0:30</span>

        <div class="vol">
            <i class="bi bi-volume-down-fill" id="vol_icon"></i>
            <input type="range" id="vol" min="0" value="100"  max="100">
            <div class="vol_bar"></div>
            <div class="dot" id="vol_dot"></div>
        </div>
    </div>
</header>
    <script src="harish.js"></script>
</body>

</html>