window.onload = start;

function start()
{
    const eAlien = document.querySelector("img");

    let x = 0;
    let y = 0;

    console.log(window.innerWidth);
    console.log(window.innerHeight);
    

    document.addEventListener("keydown", flygaSkepp);
    function flygaSkepp(event)
    {
        if (event.key == "ArrowLeft")
        {
            x -= 20;
        }
        if (event.key == "ArrowRight")
        {
            x += 20;   
        }

        if (event.key == "ArrowDown")
        {
            y += 20;
        }
        if (event.key == "ArrowUp")
        {
            y -= 20;
        }
        eAlien.style.left = x + "px";
        eAlien.style.top = y + "px";
        console.log(x + " " + y);
        
        if (x > window.innerWidth)
        {
            x = 0;
        }
        else if (x < 0)
        {
            x = window.innerWidth - 20;
        }
        if (y > window.innerHeight)
        {
            y = 0;
        }
        else if (y < 0)
        {
            y = window.innerHeight - 20;
        }
    }
}