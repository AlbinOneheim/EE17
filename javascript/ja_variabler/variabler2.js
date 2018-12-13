window.onload = start;

function start()
{
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eTalet = document.querySelector("#talet");
    const eKnapp3 = document.querySelector("#knapp3")

    eKnapp1.addEventListener("click", raknaUp);
    function raknaUp()
    {
        let talet = Number(eTalet.value);

        let summaUp = talet + 1;

        eTalet.value = summaUp;
    }

    eKnapp2.addEventListener("click", rankaNed);
    function rankaNed()
    {
        let talet = Number(eTalet.value);

        let summaNed = talet - 1;

        eTalet.value = summaNed;
    }
    
    eKnapp3.addEventListener("click", laggTill);
    function laggTill()
    {
        let talet = Number(eTalet.value);

        let summaLaggTill = talet + 9000;

        eTalet.value = summaLaggTill;
    }
}