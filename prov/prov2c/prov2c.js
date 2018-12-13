/* använder defer istället för window.onload = start; */
function start()
{
    const eAntal1 = document.querySelector("#vara1");
    const eAntal2 = document.querySelector("#vara2");
    const eFrakt = document.querySelector("#frakt");
    const eRabbat = document.querySelector("#rabattkod");
    const eKnapp = document.querySelector("button");
    const eTotal = document.querySelector("#total");

    eKnapp.addEventListener("click", slutfor);

    function slutfor()
    {
        let antal1 = Number(eAntal1.value);
        let antal2 = Number(eAntal2.value);
        let frakt = Number(eFrakt.value);
        let leverans = eRabbat.value;
    
        let total = antal1 * 39 + antal2 * 102 + frakt;
        
        if (leverans == 5599)
        {
            total = total - 29;
        }

        eTotal.value = total;  
    }
}
start();