function start()
{       
    const eplay1 = document.getElementById("play1");
    const audio1 = document.getElementById("audio1");
    const eplay2 = document.getElementById("play2");
    const audio2 = document.getElementById("audio2");
    const eplay3 = document.getElementById("play3");
    const audio3 = document.getElementById("audio3");
    var isPlaying = false;
    eplay1.addEventListener("click", playMusic1);
    eplay2.addEventListener("click", playMusic2);
    eplay3.addEventListener("click", playMusic3);
    function playMusic1()
    {
        if (isPlaying)
        {
            audio1.pause();
            isPlaying = false;
            play1.textContent = "PLAY";
        }
        else
        {
            audio1.play();
            isPlaying = true;
            play1.textContent = "PAUSE";
        }
    }
    function playMusic2()
    {
        if (isPlaying)
        {
            audio2.pause();
            isPlaying = false;
            play2.textContent = "PLAY";
        }
        else
        {
            audio2.play();
            isPlaying = true;
            play2.textContent = "PAUSE";
        }
    }
    function playMusic3()
    {
        if (isPlaying)
        {
            audio3.pause();
            isPlaying = false;
            play3.textContent = "PLAY";
        }
        else
        {
            audio3.play();
            isPlaying = true;
            play3.textContent = "PAUSE";
        }
    }
}
start();