function start()
{
    const eKon = document.querySelectorAll("input[name='kon']");
    const eKnapp = document.querySelector("button");
    eKnapp.addEventListener("click", valtKon, false);
    function valtKon()
    {   
        if (eKon[0].checked)
        {
            console.log(eKon[0].checked);
        }
        if (eKon[1].checked)
        {
            console.log(eKon[1].checked);
        }
        if (eKon[2].checked)
        {
            console.log(eKon[2].checked);  
        }
    }
}
start();