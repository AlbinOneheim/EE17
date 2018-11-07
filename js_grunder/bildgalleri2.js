function start() 
{  
    var p = document.querySelector(".bild p");
    var img = document.querySelector(".bild img");
    function change() 
    {
        img.setAttribute("src", this.dataset.file);
        p.innerHTML = this.innerHTML;
    }
    var buttons = document.getElementsByClassName("knapp");
    for (var i = 0; i < buttons.length; i++) 
        buttons[i].addEventListener("click", change, false);
}
start();