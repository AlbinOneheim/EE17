function start()
{
    const eTal = document.querySelector("#tal");
    const eFarg = document.querySelector("#farg");
    const eNamn = document.querySelector("#namn");
    const eAdjektiv = document.querySelector("#adjektiv");
    const eKnapp = document.querySelector("button");
    const eFel = document.querySelector(".fel");
    const eOutput = document.querySelector(".output");
    
    eKnapp.addEventListener("click", kor, false);
    function kor()
    {
        let talet = eTal.value;
        let fargen = eFarg.value;
        let namnet = eNamn.value;
        let adjektivet = eAdjektiv.value;

        eOutput.innerHTML = "Idag åt jag " + talet + " frallor till frukost. Jag blev alldeles " + fargen + " i ansiktet. " + namnet + " sa till mig att jag är en " + adjektivet + " kille";
        eFel.innerHTML = "";

        if (talet > 10)
        {
            eFel.innerHTML += "Talet får högst vara 10<br>";
            eOutput.innerHTML = "";
        }
        if (talet < 1)
        {
            eFel.innerHTML += "Talet får inte vara mindre än 1.<br>"
            eOutput.innerHTML = "";
        }
        if (fargen != "röd" && fargen != "gul" && fargen != "blå")
        {
            eFel.innerHTML += "Färgen måste vara röd, gul eller blå.";
            eOutput.innerHTML = "";
        }
    }
}
start();