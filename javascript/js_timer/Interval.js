function start()
{
    const timerText = document.getElementById("timer-text");
    const btnStart = document.getElementById("start");
    const btnPause = document.getElementById("pause");

    let count = 0;
    let intervalID;

    btnStart.addEventListener("click", function () {
        intervalID = setInterval(function ()
        {
            count += 1;
            timerText.textContent = count;
        }, 1000);   
    });

    btnPause.addEventListener("click", function ()
    {
        clearInterval(intervalID);
    });
}
start();