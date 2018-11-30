function start()
{
    const btnShow = document.getElementById("show-msg");
    const btnCansel = document.getElementById("cansel-msg");

    let msgTimeout = null;

    btnShow.addEventListener("click", function ()
    {
        msgTimeout = setTimeout(function ()
        {
            alert("Hello there");
        }, 2000);
    });

    btnCansel.addEventListener("click", function ()
    {
        clearTimeout(msgTimeout);
    });
}
start();