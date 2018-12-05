/* Funktion för att det JS koden ska starta */
function start()
{  
    /* Väljer ut dom element jag ska jobba med */
    const eIndikator = document.querySelector(".indikator");

    /* En eventlistenr som lyssnar på scroll på sidan och gör en function */
    window.addEventListener("scroll", () => {
        /* räknar ut hur mycket man har skrollat på sidan */
        const skrollbar = document.documentElement.scrollHeight - window.innerHeight;
        const skrollat = window.scrollY;
        
        let procentSkrollat = 100;
        /* räknar ut hur många procent man har skollat på sidan*/
        if (skrollbar > 0)
        {
            procentSkrollat = Math.ceil(skrollat / skrollbar * 100);
        }
        /* ändrar width på indikator när man skrollar */
        eIndikator.style.width = `${procentSkrollat}%`;
        
    });
}
start();