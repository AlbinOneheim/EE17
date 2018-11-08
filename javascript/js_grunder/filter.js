/* 
* Testar tre oilka filter på ett foto.
* Foto kommer från http://unsplash.com
*/

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    
    /* Välj ut alla elementen att jobba med: target */
    const elementSuddig = document.querySelector('#suddigKnapp');
    const elementGraskala = document.querySelector('#graskalaKnapp');
    const elementSepia = document.querySelector('#sepiaKnapp');
    const elementOutput = document.querySelector('.output');
    const elementFoto = document.querySelector('img');
    /* Lyssna på knapparna */
    elementSuddig.addEventListener('click', suddigt);
    elementGraskala.addEventListener('click', GraSkala );
    elementSepia.addEventListener('click', Sepia);

    /* Funktion för att göra fotot suddigt */
    function suddigt() {
        elementFoto.classList.value = 'suddigt';
        elementOutput.textContent = 'Använder filter: blur';
    }

    /* Funktion för att göra fotot gråskala */
    function GraSkala() {
        elementFoto.classList.value = 'graskala';
        elementOutput.textContent = 'Använder filter: svartvitt';
    }
    
    /* Funktion för att göra fotot sepia-färgat */
    function Sepia() {
        elementFoto.classList.value = 'sepia';
        elementOutput.textContent = 'Använder filter: sepia';
    }
}