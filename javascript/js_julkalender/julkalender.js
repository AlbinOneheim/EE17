function start()
{
    const grid = document.querySelector(".grid");
    grid.addEventListener("click", open, false);
    let victory = Math.ceil(Math.random() * 23 + 1);
    console.log(victory);
    
    function open(event)
    {
        if (event.target.className == "animated day")
        {
            console.log(event.target.textContent); 
            
            if (event.target.textContent == victory)
            {
                console.log("Huuray!");   
                event.target.classList.add("image");
            }    
            else
            {
                event.target.classList.add("zoomOut");
            }
        }
    }
}
start();