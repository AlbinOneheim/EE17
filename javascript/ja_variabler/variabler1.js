window.onload = start;
function start()
{
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eKnapp1 = document.querySelector("#knapp1");
    const eRuta3 = document.querySelector("#ruta3");
    const eKnapp2 = document.querySelector("#knapp2");
    const eRuta4 = document.querySelector("#ruta4")

    eKnapp1.addEventListener("click", addera);
    function addera()
    {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let summa = tal1 + tal2;

        eRuta3.value = summa;    
    }

    eKnapp2.addEventListener("click", subtrahera);
    function subtrahera()
    {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let subtraktion = tal1 - tal2;

        eRuta4.value = subtraktion;
    }
}