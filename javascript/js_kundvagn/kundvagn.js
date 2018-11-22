function start()
{
    var skorAntal = 0;
    var byxaAntal = 0;
    var mossaAntal = 0;

    const eSkorPris = document.querySelector("#skorPris");
    const eSkorAntal = document.querySelector("#skorAntal");
    const eSkorPlus = document.querySelector("#skorPlus");

    const eByxaPris = document.querySelector("#byxaPris");
    const eByxaAntal = document.querySelector("#byxaAntal");
    const eByxaPlus = document.querySelector("#byxaPlus");

    const eMossaPris = document.querySelector("#mossaPris");
    const eMossaAntal = document.querySelector("#mossaAntal");
    const emossaPlus = document.querySelector("#mossaPlus");

    const eFrakt = document.querySelector("#frakt");
    const eTotal = document.querySelector("#total");
    
    const elevFrakt = document.querySelectorAll("input[name='levFrakt']");

    console.log(eSkorPris.value);
    console.log(eByxaPris.value);
    console.log(eMossaPris.value);

    eSkorPlus.addEventListener("click", laggtillSkor, false);
    function laggtillSkor()
    {
        skorAntal += 1;
        eSkorAntal.value = skorAntal;
        if (elevFrakt[0].checked)
        {
            eFrakt.value = elevFrakt[0].value;        
        }
        if (elevFrakt[1].checked)
        {
            eFrakt.value = elevFrakt[1].value;
        }
        if (elevFrakt[2].checked)
        {
            eFrakt.value = elevFrakt[2].value;
        }
        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }

    eByxaPlus.addEventListener("click", laggtillByxa, false);
    function laggtillByxa()
    {
        byxaAntal += 1;
        eByxaAntal.value = byxaAntal;
        if (elevFrakt[0].checked)
        {
            eFrakt.value = elevFrakt[0].value;        
        }
        if (elevFrakt[1].checked)
        {
            eFrakt.value = elevFrakt[1].value;
        }
        if (elevFrakt[2].checked)
        {
            eFrakt.value = elevFrakt[2].value;
        }
        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }

    emossaPlus.addEventListener("click", laggtillMossa, false);
    function laggtillMossa()
    {
        mossaAntal += 1;
        eMossaAntal.value = mossaAntal;
        if (elevFrakt[0].checked)
        {
            eFrakt.value = elevFrakt[0].value;        
        }
        if (elevFrakt[1].checked)
        {
            eFrakt.value = elevFrakt[1].value;
        }
        if (elevFrakt[2].checked)
        {
            eFrakt.value = elevFrakt[2].value;
        }
        eTotal.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
    }
}
start();