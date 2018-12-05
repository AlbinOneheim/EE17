function start()
{
    /* refernser */
    const eVinster = document.querySelector("#vinster");

    const eSattnamn = document.querySelector(".sattnamn");
    const eInputNamn1 = document.querySelector("input.player1");
    const eInputNamn2 = document.querySelector("input.player2");
    const eKnappRedig = document.querySelector(".sattnamn button");

    const eSpel = document.querySelector(".spel");
    const eHp1 = document.querySelector(".liv.player1 h1");
    const eHp2 = document.querySelector(".liv.player2 h1");

    const eKnappStart = document.querySelector(".spel button");

    /* variabler */
    let namn1;
    let namn2;

    let poang1 = 0;
    let poang2 = 0;

    /* event */
    eKnappRedig.addEventListener('click', function () {
        namn1 = eInputNamn1.value;
        namn2 = eInputNamn2.value;

        vinstera(poang1, poang2);
        eSattnamn.classList.add('dold');
        eSpel.classList.remove('dold');
    });

    eKnappStart.addEventListener('click', function () {
        let n = Math.ceil(Math.random() * 20 + 5);
        console.log(n);
    });

    function vinstera(p1, p2) {
        eVinster.textContent = namn1 + ' ' + p1 + ' - ' + p2 + ' ' + namn2;
    }
}
start();