window.onload = start;

function start()
{
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eKnapp3 = document.querySelector("#knapp3");
    const eKnapp4 = document.querySelector("#knapp4");
    const eKnapp5 = document.querySelector("#knapp5");
    const eTalet = document.querySelector("#talet");

    eKnapp1.addEventListener("click", raknaUp);
    function raknaUp()
    {
        let talet = Number(eTalet.value);

        eTalet.value = talet + 1;
    }

    eKnapp2.addEventListener("click", rankaNed);
    function rankaNed()
    {
        let talet = Number(eTalet.value);

        eTalet.value = talet - 1;
    }
    
    eKnapp3.addEventListener("click", laggTill);
    function laggTill()
    {
        let talet = Number(eTalet.value);
        
        eTalet.value = talet + 9000;
    }

    eKnapp4.addEventListener("click", nollStall);
    function nollStall()
    {
        let talet = Number(eTalet.value);

        eTalet.value = talet * 0;
    }

    eKnapp5.addEventListener("click", taBort);
    function taBort()
    {
        let talet = Number(eTalet.value);

        eTalet.value = talet - 9000;
    }
}