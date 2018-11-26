function start()
{
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eKnappNytt = document.querySelector("#nytt");
    const eOutput = document.querySelector("#output");

    let ordlistaEn = ["Fun", "Correct", "Easy", "Hungry", "Fast", "Car", "Library", "Cat", "Plane", "Holiday"];

    let ordlistaSv = ["Rolig", "Korrekt", "Enkelt", "Hungrig", "Snabb", "Bil", "Biblotek", "katt", "Plan", "Semester"];

    let ordetEn = "";
    let ordetSv = "";
    function slumpaOrd()
    {
        let slumpTal = Math.ceil(Math.random() * 10 - 1);
        ordetEn = ordlistaEn[slumpTal];
        ordetSv = ordlistaSv[slumpTal];
    }
    slumpaOrd();
    console.log(ordetEn + " " + ordetSv);
    eOrdet.textContent = ordetEn;

    eKnappRatta.addEventListener("click", ratta, false);
    function ratta()
    {
        let svaret = eSvaret.value;
        if (svaret == ordetSv)
        {
            eOutput.textContent = "Rätt svar";
        }
        else
        {
            eOutput.textContent = "Fel svar";
        }
        eKnappNytt.addEventListener("click", nyfraga, false);
        function nyfraga()
        {
            slumpaOrd();
            eOrdet.textContent = ordetEn;
            eSvaret.value = "";
            eOutput.textContent = "";
        }
    }
}
start();