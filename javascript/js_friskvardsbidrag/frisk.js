function start()
{
    /* lista på alla element */
    const eGodkand = document.querySelector("#godkand");
    const eGiltig = document.querySelector("#giltig");
    const eBetalt = document.querySelector("#betalt");
    const eMoms = document.querySelector("#momssats");
    const eBelopp = document.querySelector("#belopp");
    const eTotal = document.querySelector("total");
    const eKanpp = document.querySelector("button");

    eKanpp.addEventListener("click", registreraKvitto, false);

    function registreraKvitto()
    {
        /* läsa av ala värden */
        let godkand = eGodkand.checked;
        let giltig = eGiltig.checked;
        let betalt = eBetalt.checked;
        let momssats = eMoms.value;
        let belopp = Number(eBelopp.value);
        console.log(godkand + " " + giltig + " " + betalt + " " + momssats + " " + belopp);

        /* räkna ut belopp plus vald momssats */
        let total = belopp * (1 + momssats / 100);

        /* om man kvittot är godkänt, giltigt och betalt så fyll i totalet */
        if (godkand && giltig && betalt)
        {
            eTotal.value = total;
        }
        else
        {
            alert("Kvittot måste vara checkade!!!");
        }
    }
}
start();