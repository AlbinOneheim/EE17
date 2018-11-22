function start()
{
    var summaSma = 0;
    var summaStora = 0;
    const elementVara = document.querySelector("#vara");
    const elementPris = document.querySelector("#pris");
    const elementKnapp = document.querySelector("button");
    const elementSmaVara = document.querySelector(".smaVara");
    const elementStoraVara = document.querySelector(".storaVara");
    const elementSmaTot = document.querySelector(".smaTot");
    const elementStoraTot = document.querySelector(".storaTot");

    elementKnapp.addEventListener("click", mataIn, false);
    function mataIn()
    {
        var vara = elementVara.value;  
        var pris = Number(elementPris.value);
        if (pris < 100)
        {
            elementSmaVara.innerHTML += vara + " " + pris + "kr<br>";
            summaSma += pris;
            elementSmaTot.textContent = summaSma;
        }
        else 
        {
            elementStoraVara.innerHTML += vara + " " + pris + "kr<br>";
            summaStora += pris;
            elementStoraTot.textContent = summaStora;
        }
        if (summaSma + summaStora > 3000)
        {
            elementSmaTot.style.backgroundColor = "red";
            elementStoraTot.style.backgroundColor = "red";
        }
    }
}
start();