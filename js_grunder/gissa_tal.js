var slumptal = Math.ceil(Math.random()* 100);
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');
console.log('Nytt slumptal:' + slumptal);
var antal = 0;
function gissa() {
    antal++;
    var gissning = elementGissning.value;

    if (gissning == slumptal) {
        svar = '<p class="animated yipee">' + antal + ') ' + gissning + ' Yipee, du har vunnit!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ') ' + gissning + ' för högt!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }
    if (gissning < slumptal) {
        svar = '<p class="lagt">' + antal + ') ' + gissning + ' för lågt!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }
    if (gissning > 100) {
        svar = '<p class="dum">' + antal + ') ' + gissning + ' är du efterbliven!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }
}   