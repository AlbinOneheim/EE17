/* När man klickar på en knapp byts bilden ut till aktuell bild */

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
Function start() {
    /* Vilka element arbetar vi med? */
    const elementImg = document.querySelector('.bild img');
    const elementP = document.querySelector('.bild p');
    const elementKnapp1 = document.querySelector('#knapp1');
    const elementKnapp2 = document.querySelector('#knapp2');
    const elementKnapp3 = document.querySelector('#knapp3');
    const elementKnapp4 = document.querySelector('#knapp4');

    /* Vilka händelser behöver vi lyssna på? */
    elementKnapp1.addEventListener('click')

}