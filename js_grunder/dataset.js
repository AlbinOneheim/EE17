function start()
{
    const knapp1 = document.querySelector(".knapp1");
    const knapp2 = document.querySelector(".knapp2");
    function change()
    {
        console.log(this.dataset.sko);          
    }
    knapp1.addEventListener("click", change, false);
    knapp2.addEventListener("click", change, false);
}  
start();