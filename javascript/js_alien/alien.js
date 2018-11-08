
/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
/* Kör-delen */

/* Infoga en text på sidan när du klickar på knapp 1: Här kommer freebies Space ikoner */
    const elementFire = document.querySelector('.fire');
    console.log(elementFire);
    const elementIce = document.querySelector('.ice');
    console.log(elementIce);
    const elementAttack = document.querySelector('.attack');
    console.log(elementAttack);
    const elementDiv = document.querySelector('div');
    console.log(elementDiv);
    

/* Lyssna på klick-signalen */
    elementFire.addEventListener('click', infogaText);

    function infogaText() {
        elementDiv.textContent += 'ima firin mah lazor';
    }
    
    elementIce.addEventListener('click', infogaBild);
    function infogaBild() {
        elementDiv.innerHTML += '<img src="./bilder/alien-1-64x64.png" alt="Alien">';
    }

    elementAttack.addEventListener('click', infogaBilder);
    function infogaBilder() {
        elementDiv.innerHTML += '<img src="./bilder/alien-3-64x64.png" alt="Alien">';
    }
    elementDiv.addEventListener('click', infogaSlumpBild);
    var bilder = [
        './bilder/alien-1-64.png',
        './bilder/asteroid-2-64x64.png',
        './bilder/alien-ship-64x64.png',
        './bilder/alien-3-64x64.png',
        './bilder/alien-5-64x64.png',
        './bilder/astronaut-helmet-64x64.png',
        './bilder/earth-64x64.png'];
    function infogaSlumpBild() {
        var slump = Math.ceil(Math.random() * 7 - 1);
        elementDiv.innerHTML += '<img src="./' + bilder[slump] + '"alt="Bild">';
    }
}